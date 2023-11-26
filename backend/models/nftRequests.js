const mongoose = require("mongoose");

const nftRequestSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Email: {
    type: String,
  },

  Aadhar: {
    type: String,
  },

  Pan: {
    type: String,
  },

  Ration: {
    type: String,
  },

  MetamaskAddress: {
    type: String,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});






module.exports = mongoose.model("Nft", nftRequestSchema);
