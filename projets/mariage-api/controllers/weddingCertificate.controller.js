const db = require("../models");
const WeddingCertificate = db.weddingCertificates;
// Create and Save a new Wedding Certificate
exports.create = (req, res) => {
  // Validate request
  if (!req.body.partnerOne || !req.body.partnerTwo || !req.body.contractAddress || !req.body.transactionHash) {
    res.status(400).send({ message: "Content can not be empty or incomplete!" });
    return;
  }
  // Create a Wedding Certificate
  const weddingCertificate = new WeddingCertificate({
    partnerOne: req.body.partnerOne,
    partnerTwo: req.body.partnerTwo,
    contractAddress: req.body.contractAddress,
    transactionHash: req.body.transactionHash,
    createdAt: new Date(),
  });
  // Save Wedding Certificate in the database
  weddingCertificate
    .save(weddingCertificate)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wedding Certificate."
      });
    });
};

// Retrieve all Wedding Certificates from the database.
exports.findAll = (req, res) => {
  WeddingCertificate.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving wedding certificates."
      });
    });
};

// Retrieve one Wedding Certificate from the database.
exports.findOne = (req, res) => {
  // Validate request
  if (!req.params.contractAddress) {
    res.status(400).send({ message: "Content can not be empty or wrong!" });
    return;
  }
  WeddingCertificate.findOne({ contractAddress: req.params.contractAddress })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving wedding certificate."
      });
    });
};