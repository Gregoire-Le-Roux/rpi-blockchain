import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import WeddingCertificate from './artifacts/contracts/WeddingCertificate.sol/WeddingCertificate.json';

const weddingCertificateAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

function App() {
  const [partnerOne, setPartnerOne] = useState("");
  const [partnerTwo, setPartnerTwo] = useState("");
  const [inputPartnerOne, setInputPartnerOne] = useState("");
  const [inputPartnerTwo, setInputPartnerTwo] = useState("");


  useEffect(() => {
    fetchWeddingCertificate();
  }, [])

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchWeddingCertificate() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(weddingCertificateAddress, WeddingCertificate.abi, provider);
      try {
        const _partnerOne = await contract.getPartnerOne();
        setPartnerOne(_partnerOne);
        const _partnerTwo = await contract.getPartnerTwo();
        setPartnerTwo(_partnerTwo);
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  async function setWeddingCertificate() {
    if (!inputPartnerOne && !inputPartnerTwo) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(weddingCertificateAddress, WeddingCertificate.abi, signer);
      const transaction = await contract.setPartners(inputPartnerOne, inputPartnerTwo);
      setInputPartnerOne('');
      setInputPartnerTwo('');
      await transaction.wait();
      fetchWeddingCertificate();
    }
  }

  return (
    <div className="App">
      <div>
        <h2>Add your wedding certificat !</h2>
      </div>
      <div>
        <input value={inputPartnerOne} onChange={e => setInputPartnerOne(e.target.value)} placeholder="First Partner" />
        <input value={inputPartnerTwo} onChange={e => setInputPartnerTwo(e.target.value)} placeholder="Second Partner" style={{ marginLeft: 3 }} />
      </div>
      <div>
        <button onClick={setWeddingCertificate}>Add new Wedding Certificate</button>
      </div>
      {partnerOne !== "" && partnerTwo !== "" ? <p>{partnerOne}<FontAwesomeIcon icon={faPeopleArrowsLeftRight} style={{ marginLeft: 3, marginRight: 3 }} />{partnerTwo}</p> : null}
    </div>
  );
}

export default App;