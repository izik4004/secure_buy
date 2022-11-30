// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SecureBuy is ERC721URIStorage {

    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;

    
    // uint256 listPrice = 0.01 ether;


    constructor() ERC721("SBuy", "SCB") {}
       
        function mint(string memory tokenURI) public returns (uint256) {
        //Increment the tokenId counter, which is keeping track of the number of minted NFTs
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        //Mint the NFT with tokenId newTokenId to the address who called createToken
        _mint(msg.sender, newItemId);

        //Map the tokenId to the tokenURI (which is an IPFS URL with the NFT metadata)
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }

}
