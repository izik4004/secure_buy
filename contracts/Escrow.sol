//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;
contract Escrow{
    address  public buyer;
    address public seller;
    uint256 public costPrice;
    uint256 _start;
    uint256 _end;
    State  currentState;
    uint256 immutable DEADLINE=1209600;


    enum State{AWAITING_PAYMENT,AWAITING_DELIVERY,TIP,COMPLETE}

    constructor(address _buyer, address _seller, uint256 _costPrice){ 
        buyer = _buyer;
        seller= _seller;
        costPrice=_costPrice;
        require(buyer!=seller,"Buyer's Address cannot be equals to Seller's Address");   
    }

    modifier onlyBuyer(){
        require(msg.sender==buyer,"Only Buyer can make this transaction");
        _;
    }
 
    modifier inState(State expectedState){
        require(currentState == expectedState);
        _;
    }
 
   
    function confirmPayment()public payable onlyBuyer inState(State.AWAITING_PAYMENT){
        require(msg.value >= costPrice, "Insufficient Funds");
         _start = block.timestamp;
         _end = DEADLINE +_start;
      if(_end-block.timestamp<=0){
          confirmDelivery();
      }
    }

    function confirmDelivery()public onlyBuyer inState(State.AWAITING_DELIVERY){
      (bool sent ,)= seller.call{value:address(this).balance}("");
      require(sent, "Unsuccessful Transfer");
    }

       function cancelDelivery() onlyBuyer public{
      (bool sent ,)= buyer.call{value:address(this).balance}("");
      require(sent, "Unsuccessful Transfer");
      currentState = State.COMPLETE;
    }

    function Tip() public payable inState(State.COMPLETE){
        currentState = State.TIP;
        (bool sent ,)= seller.call{value:address(this).balance}("");
         require(sent, "Unsuccessful Transfer");
         currentState = State.COMPLETE;
    }
    
   function getRemainingTimeLeft() public view  returns(uint256){
         return _end -block.timestamp;
     }

}
