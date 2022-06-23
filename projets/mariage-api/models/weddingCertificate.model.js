module.exports = mongoose => {
  const WeddingCertificate = mongoose.model(
    "weddingcertificates",
    mongoose.Schema(
      {
        partnerOne: String,
        partnerTwo: String,
        contractAddress: String,
        transactionHash: String,
        createdAt: Date
      }
    )
  );
  return WeddingCertificate;
};