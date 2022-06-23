// Axios permet de faire des appels à une api
import axios from 'axios';

const api_wedding = process.env.REACT_APP_URL_API + "/weddingCertificate"

export const fetchWeddingCertificates = async () => {
    try {
        let req = await axios.get(api_wedding);
        return req.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchWeddingCertificateByContractAddress = async (contractAddress) => {
    try {
        let req = await axios.get(api_wedding + "/" + contractAddress);
        return req.data;
    } catch (err) {
        console.log(err);
    }
}

export const addWeddingCertificate = async (weddingCertificate) => {
    try {
        let req = await axios.put(api_wedding, weddingCertificate);
        return req.data;
    } catch (err) {
        console.log(err);
    }
}