// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Contract to respect TP PART 2, the contract is different in the project mariage

contract WeddingCertificate {
    // Declare two partners
    string public partnerOne;
    string public partnerTwo;

    // Initialize value of the two partners
    constructor( string memory _partnerOne, string memory _partnerTwo ) public  {
        partnerOne = _partnerOne;
        partnerTwo = _partnerTwo;
    }

    // Function to get the first partner
    function getPartnerOne() public view returns (string memory success) {
        return partnerOne;
    }

    // Function to get the second partner
    function getPartnerTwo() public view returns (string memory success) {
        return partnerTwo;
    }

    // Function to get the name of the two partners
    function getPartners() public view returns (string memory success) {
        return string.concat("Partner 1 is ", partnerOne, " and Partner 2 is ", partnerTwo);
    }
}

contract WeddingCertificateFactory {
    // Function to create a new wedding certificate
    function addWeddingCertificate(string memory _partnerOne, string memory _partnerTwo) public returns (bool success) {
        new WeddingCertificate(_partnerOne, _partnerTwo);
        return true;
    }
}