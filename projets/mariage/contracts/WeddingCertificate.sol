// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WeddingCertificate {
    // Declare two partners
    string private partnerOne;
    string private partnerTwo;

    // Initialize value of the two partners
    constructor(string memory _partnerOne, string memory _partnerTwo) {
        partnerOne = _partnerOne;
        partnerTwo = _partnerTwo;
    }

    // Function to get the first partner
    function getPartnerOne() public view returns (string memory) {
        return partnerOne;
    }

    // Function to get the second partner
    function getPartnerTwo() public view returns (string memory) {
        return partnerTwo;
    }

    // Function to set partners of a wedding certificate
    function setPartners(string memory _partnerOne, string memory _partnerTwo) public {
        partnerOne = _partnerOne;
        partnerTwo = _partnerTwo;
    }
}