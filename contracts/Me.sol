//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Me {
    address public nftAddress;
    address payable public seller;

    constructor (address _nftAddress, address payable _seller){
        nftAddress = _nftAddress;
        seller = _seller;
    }

    function list(uint256 _nftID) public {
        IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID{
            
        })
    }
}