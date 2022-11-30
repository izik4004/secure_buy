//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

interface IERC721 {
    function transferFrom (
        address _from,
        address _to,
        address _id
    ) external;
}

contract Esrrow {
    address public nftAddress;
    address public payable seller

    constructor(
        address _nftAddress, 
        address _seller
    ){
        nftAddress = _nftAddress;
        seller = _seller;
    }
}