const BuyRequestSchema = require("../model/buyRequest"); // model schema
const SellRequestSchema = require("../model/sellRequest"); //model schema

//all database operations
class AdminRepository {
  constructor() {}

  //repo gets data from the service and assings the property to the model schema saves to database and send back the saved data to the service
  async SaveBuyRequestInfo({
    nameOfPhone,
    phoneMode,
    storageSize1,
    _new,
    a1,
    a2,
    b1,
    b2,
    c,
    c_b,
    c_d,
    storageSize2,
    _new_2,
    a1_2,
    a2_2,
    b1_2,
    b2_2,
    c_2,
    c_b__2,
    c_d__2,
    storageSize3,
    _new_3,
    a1_3,
    a2_3,
    b1_3,
    b2_3,
    c_3,
    c_b__3,
    c_d__3,
  }) {
    try {
      const phoneInfo = new BuyRequestSchema({
        phoneName: nameOfPhone,
        condition: phoneMode,
        storageSize1: storageSize1,
        pricerange1: {
          NEW: _new,
          A1: a1,
          A2: a2,
          B1: b1,
          B2: b2,
          C: c,
          C_B: c_b,
          C_D: c_d,
        },
        storageSize2: storageSize2,
        pricerange2: {
          NEW: _new_2,
          A1: a1_2,
          A2: a2_2,
          B1: b1_2,
          B2: b2_2,
          C: c_2,
          C_B: c_b__2,
          C_D: c_d__2,
        },
        storageSize3: storageSize3,
        pricerange3: {
          NEW: _new_3,
          A1: a1_3,
          A2: a2_3,
          B1: b1_3,
          B2: b2_3,
          C: c_3,
          C_B: c_b__3,
          C_D: c_d__3,
        },
      });
      // return data to the service
      const savedPhoneInfo = await phoneInfo.save();
      return savedPhoneInfo;
    } catch (error) {}
  }
  //==============================================================================//
  //repo gets data from the service and assings the property to the model schema saves to database and send back the saved data to the service

  async sellRequestInfo({
    nameOfPhone,
    phoneMode,
    storageSize1,
    _new,
    a1,
    a2,
    b1,
    b2,
    c,
    c_b,
    c_d,
    storageSize2,
    _new_2,
    a1_2,
    a2_2,
    b1_2,
    b2_2,
    c_2,
    c_b__2,
    c_d__2,
    storageSize3,
    _new_3,
    a1_3,
    a2_3,
    b1_3,
    b2_3,
    c_3,
    c_b__3,
    c_d__3,
  }) {
    try {
      //return data to the service
      const phoneInfo = new SellRequestSchema({
        phoneName: nameOfPhone,
        condition: phoneMode,
        storageSize1: storageSize1,
        pricerange1: {
          NEW: _new,
          A1: a1,
          A2: a2,
          B1: b1,
          B2: b2,
          C: c,
          C_B: c_b,
          C_D: c_d,
        },
        storageSize2: storageSize2,
        pricerange2: {
          NEW: _new_2,
          A1: a1_2,
          A2: a2_2,
          B1: b1_2,
          B2: b2_2,
          C: c_2,
          C_B: c_b__2,
          C_D: c_d__2,
        },
        storageSize3: storageSize3,
        pricerange3: {
          NEW: _new_3,
          A1: a1_3,
          A2: a2_3,
          B1: b1_3,
          B2: b2_3,
          C: c_3,
          C_B: c_b__3,
          C_D: c_d__3,
        },
      });
      const savedPhoneInfo = await phoneInfo.save();
      return savedPhoneInfo;
    } catch (error) {}
  }

  //get all the data from the query, send back to the service

  async getQueryData() {
    const buyQueryInfo = await BuyRequestSchema.find({});
    const sellQueryInfo = await SellRequestSchema.find({});
    return { dataInfo: { buyInfo: buyQueryInfo, sellInfo: sellQueryInfo } };
  }
}

module.exports = AdminRepository;
