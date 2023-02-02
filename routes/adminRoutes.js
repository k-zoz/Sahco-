const express = require("express");
const router = express.Router();
const {
  getNewPriceList,
  getPhoneListDetails,
} = require("../controllers/adminController");

router.get("/updatePriceList", getNewPriceList);
router.get("/priceList", getPhoneListDetails);

module.exports = router;
