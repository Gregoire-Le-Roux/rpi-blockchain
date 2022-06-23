var express = require('express');
var router = express.Router();
const weddingCertificates = require("../controllers/weddingCertificate.controller.js");

/* PUT a new wedding certificate. */
router.put('/', weddingCertificates.create);

/* GET wedding certificate listing. */
router.get('/', weddingCertificates.findAll);

/* GET wedding certificate by contractAddress. */
router.get('/:contractAddress', weddingCertificates.findOne);

module.exports = router;