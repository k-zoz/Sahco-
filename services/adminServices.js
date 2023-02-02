const { BuyRequestData, SellRequestData } = require("../parse-excel-file");

const { FormateData, FormateDataBuy, FormateDataSell } = require("../utils");

// import the repository and create an instance of it
const AdminRepository = require("../repository/adminRepo");

// All Business logic will be here
class AdminService {
  constructor() {
    this.repository = new AdminRepository();
  }

  //get the buy request data and save it to a database, and return the data to the controller
  async getBuyRequestDataANdPostToDatabase() {
    const buyData = await BuyRequestData(); // get the buy request data from the excel file
    const savedBuyData = await this.repository.SaveBuyRequestInfo({
      nameOfPhone: buyData.nameOfPhone,
      phoneMode: buyData.phoneMode,
      storageSize1: buyData.storageSize.phoneMemorySize1,
      _new: buyData.storageSize.priceRange1.new,
      a1: buyData.storageSize.priceRange1.A1,
      a2: buyData.storageSize.priceRange1.A2,
      b1: buyData.storageSize.priceRange1.B1,
      b2: buyData.storageSize.priceRange1.B2,
      c: buyData.storageSize.priceRange1.C,
      c_b: buyData.storageSize.priceRange1.C_B,
      c_d: buyData.storageSize.priceRange1.C_D,
      storageSize2: buyData.storageSize.phoneMemorySize2,
      _new_2: buyData.storageSize.priceRange2.new,
      a1_2: buyData.storageSize.priceRange2.A1,
      a2_2: buyData.storageSize.priceRange2.A2,
      b1_2: buyData.storageSize.priceRange2.B1,
      b2_2: buyData.storageSize.priceRange2.B2,
      c_2: buyData.storageSize.priceRange2.C,
      c_b__2: buyData.storageSize.priceRange2.C_B,
      c_d__2: buyData.storageSize.priceRange2.C_D,
      storageSize3: buyData.storageSize.phoneMemorySize3,
      _new_3: buyData.storageSize.priceRange3.new,
      a1_3: buyData.storageSize.priceRange3.A1,
      a2_3: buyData.storageSize.priceRange3.A2,
      b1_3: buyData.storageSize.priceRange3.B1,
      b2_3: buyData.storageSize.priceRange3.B2,
      c_3: buyData.storageSize.priceRange3.C,
      c_b__3: buyData.storageSize.priceRange3.C_B,
      c_d__3: buyData.storageSize.priceRange3.C_D,
    }); //send data gotten from parsed to repository save into database
    return FormateData(savedBuyData); // send the data
  }

  //get the sell request data and save it to a database, and return the data to the controller
  async getSellRequestDataANdPostToDatabase() {
    const sellData = await SellRequestData(); // get the sell request data from the excel file
    const savedSellData = await this.repository.sellRequestInfo({
      nameOfPhone: sellData.nameOfPhone,
      phoneMode: sellData.phoneMode,
      storageSize1: sellData.storageSize.phoneMemorySize1,
      _new: sellData.storageSize.priceRange1.new,
      a1: sellData.storageSize.priceRange1.A1,
      a2: sellData.storageSize.priceRange1.A2,
      b1: sellData.storageSize.priceRange1.B1,
      b2: sellData.storageSize.priceRange1.B2,
      c: sellData.storageSize.priceRange1.C,
      c_b: sellData.storageSize.priceRange1.C_B,
      c_d: sellData.storageSize.priceRange1.C_D,
      storageSize2: sellData.storageSize.phoneMemorySize2,
      _new_2: sellData.storageSize.priceRange2.new,
      a1_2: sellData.storageSize.priceRange2.A1,
      a2_2: sellData.storageSize.priceRange2.A2,
      b1_2: sellData.storageSize.priceRange2.B1,
      b2_2: sellData.storageSize.priceRange2.B2,
      c_2: sellData.storageSize.priceRange2.C,
      c_b__2: sellData.storageSize.priceRange2.C_B,
      c_d__2: sellData.storageSize.priceRange2.C_D,
      storageSize3: sellData.storageSize.phoneMemorySize3,
      _new_3: sellData.storageSize.priceRange3.new,
      a1_3: sellData.storageSize.priceRange3.A1,
      a2_3: sellData.storageSize.priceRange3.A2,
      b1_3: sellData.storageSize.priceRange3.B1,
      b2_3: sellData.storageSize.priceRange3.B2,
      c_3: sellData.storageSize.priceRange3.C,
      c_b__3: sellData.storageSize.priceRange3.C_B,
      c_d__3: sellData.storageSize.priceRange3.C_D,
    });
    return FormateData(savedSellData); // send the data
  }

  async getAllPhoneInfo() {
    const { dataInfo } = await this.repository.getQueryData();
    // return FormateDataBuy(data1:dataInfo.buyInfo, data2: dataInfo.sellInfo);
    return FormateDataBuy({
      data: { data1: dataInfo.buyInfo, data2: dataInfo.sellInfo },
    });
  }
}

module.exports = AdminService;
