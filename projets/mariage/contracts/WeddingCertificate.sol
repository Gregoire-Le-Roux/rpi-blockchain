// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WeddingCertificate is ERC20 {
    // Declare two partners
    string private partnerOne;
    string private partnerTwo;

    // Initialize value of the two partners
    constructor(uint256 initialSupply, string memory _partnerOne, string memory _partnerTwo) ERC20 ("GregToken", "GT") {
        _mint(msg.sender, initialSupply);
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