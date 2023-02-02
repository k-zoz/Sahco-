const { StatusCodes } = require("http-status-codes");
const AdminService = require("../services/adminServices");

//get an instance of the service
const service = new AdminService();

// route to get the data sent to the database
const getNewPriceList = async (req, res) => {
  try {
    await service.getBuyRequestDataANdPostToDatabase();
    await service.getSellRequestDataANdPostToDatabase();
  } catch (error) {
    // console.log(error);
  }
  res.status(StatusCodes.OK).json({ data: { msg: `Successfully posted` } });
};

//route to get the data passed from the query
const getPhoneListDetails = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);
    const { data } = await service.getAllPhoneInfo();
    res.status(StatusCodes.OK).json({ data });
  } catch (error) {}
};

module.exports = { getNewPriceList, getPhoneListDetails };
