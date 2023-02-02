const mongoose = require("mongoose");

//define a schema for the sell request
const sellRequestSchema = new mongoose.Schema(
  {
    requestType: `Sell Request`,
    phoneName: String,
    condition: String,
    storageSize1: String,
    pricerange1: {
      NEW: Number,
      A1: Number,
      A2: Number,
      B1: Number,
      B2: Number,
      C: Number,
      C_B: Number,
      C_D: Number,
    },
    storageSize2: String,
    pricerange2: {
      NEW: Number,
      A1: Number,
      A2: Number,
      B1: Number,
      B2: Number,
      C: Number,
      C_B: Number,
      C_D: Number,
    },
    storageSize3: String,
    pricerange3: {
      NEW: Number,
      A1: Number,
      A2: Number,
      B1: Number,
      B2: Number,
      C: Number,
      C_B: Number,
      C_D: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sell-Request", sellRequestSchema);
