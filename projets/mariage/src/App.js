import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';

import { addWeddingCertificate, fetchWeddingCertificates, fetchWeddingCertificateByContractAddress } from './api/WeddingCertificate';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrowsLeftRight, faIdCardClip } from "@fortawesome/free-solid-svg-icons";

import WeddingCertificate from './artifacts/contracts/WeddingCertificate.sol/WeddingCertificate.json';

// Wedding Certificate Address get when contract is deployed
const weddingCertificateAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

function App() {
  const [partnerOne, setPartnerOne] = useState("");
  const [partnerTwo, setPartnerTwo] = useState("");
  const [inputPartnerOne, setInputPartnerOne] = useState("");
  const [inputPartnerTwo, setInputPartnerTwo] = useState("");


  useEffect(() => {
    fetchWeddingCertificate();
  }, [])

  // Request to access an ethereum account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // Get partners from wedding certificate
  async function fetchWeddingCertificate() {
    if (typeof window.ethereum !== 'undefined') {
      // Get provider and contract from wedding certificate address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(weddingCertificateAddress, WeddingCertificate.abi, provider);
      try {
        // Get partners and update front values
        const _partnerOne = await contract.getPartnerOne();
        setPartnerOne(_partnerOne);
        const _partnerTwo = await contract.getPartnerTwo();
        setPartnerTwo(_partnerTwo);
        // This is just a test to get all certificates and one in database
        let allCertificates = await fetchWeddingCertificates();
        console.log(allCertificates);
        let oneCertificate = await fetchWeddingCertificateByContractAddress("0x5FbDB2315678afecb367f032d93F642f64180aa3");
        console.log(oneCertificate);
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  // Set wedding certificate partners 
  async function setWeddingCertificate() {
    if (!inputPartnerOne && !inputPartnerTwo) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      // Get provider, signer and contract from wedding certificate address
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(weddingCertificateAddress, WeddingCertificate.abi, signer);
      // Set Partners Contract Method
      const transaction = await contract.setPartners(inputPartnerOne, inputPartnerTwo);
      const resultTransaction = await transaction.wait();
      // If transaction worked, we create in database the wedding certificate
      if (resultTransaction.transactionHash !== undefined) {
        let weddingCertificate = {
          partnerOne: inputPartnerOne,
          partnerTwo: inputPartnerTwo,
          contractAddress: weddingCertificateAddress,
          transactionHash: resultTransaction.transactionHash,
        }
        // Add to database wedding certificate
        await addWeddingCertificate(weddingCertificate);
      }
      // Reset Input Partners
      setInputPartnerOne('');
      setInputPartnerTwo('');
      // Update wedding certificate from contract
      fetchWeddingCertificate();
    }
  }

  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div>
            <h2>Add your wedding certificat <FontAwesomeIcon icon={faIdCardClip} style={{ marginLeft: 3, marginRight: 3 }} />!</h2>
          </div>
          <div>
            <input value={inputPartnerOne} onChange={e => setInputPartnerOne(e.target.value)} placeholder="First Partner" />
            <input value={inputPartnerTwo} onChange={e => setInputPartnerTwo(e.target.value)} placeholder="Second Partner" style={{ marginLeft: 3 }} />
          </div>
          <div>
            <button onClick={setWeddingCertificate}>Add new Wedding Certificate</button>
          </div>
          {partnerOne !== "" && partnerTwo !== "" ?
            <div>
              <p>{partnerOne}<FontAwesomeIcon icon={faPeopleArrowsLeftRight} style={{ marginLeft: 3, marginRight: 3 }} />{partnerTwo}</p>
              <span>Contract address: {weddingCertificateAddress}</span>
            </div> : null}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;