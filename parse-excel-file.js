const ExcelJS = require("exceljs");
module.exports.BuyRequestData = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("trade-requests.xlsx");

  ///// fetch sheet by name
  const worksheet = workbook.getWorksheet("Sheet1");

  //create a request table object
  const BuyRequestTable = {
    requestType: worksheet.getCell("A1:J2").value,
    nameOfPhone: worksheet.getCell("A3:J3").value,
    phoneMode: worksheet.getCell("A5:A7").value,
    storageSize: {
      phoneMemorySize1: worksheet.getCell("B5").value,
      priceRange1: {
        new: worksheet.getCell("C5").text,
        A1: worksheet.getCell("D5").text,
        A2: worksheet.getCell("E5").text,
        B1: worksheet.getCell("F5").text,
        B2: worksheet.getCell("G5").text,
        C: worksheet.getCell("H5").text,
        C_B: worksheet.getCell("I5").text,
        C_D: worksheet.getCell("J5").text,
      },
      phoneMemorySize2: worksheet.getCell("B6").value,
      priceRange2: {
        new: worksheet.getCell("C6").text,
        A1: worksheet.getCell("D6").text,
        A2: worksheet.getCell("E6").text,
        B1: worksheet.getCell("F6").text,
        B2: worksheet.getCell("G6").text,
        C: worksheet.getCell("H6").text,
        C_B: worksheet.getCell("I6").text,
        C_D: worksheet.getCell("J6").text,
      },
      phoneMemorySize3: worksheet.getCell("B7").value,
      priceRange3: {
        new: worksheet.getCell("C7").text,
        A1: worksheet.getCell("D7").text,
        A2: worksheet.getCell("E7").text,
        B1: worksheet.getCell("F7").text,
        B2: worksheet.getCell("G7").text,
        C: worksheet.getCell("H7").text,
        C_B: worksheet.getCell("I7").text,
        C_D: worksheet.getCell("J7").text,
      },
    },
  };

  return BuyRequestTable;
};

module.exports.SellRequestData = async () => {
  /// read from a file
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("trade-requests.xlsx");

  ///// fetch sheet by name
  const worksheet = workbook.getWorksheet("Sheet1");

  //create a request table object
  const SellRequestTable = {
    requestType: worksheet.getCell("L1:U2").value,
    nameOfPhone: worksheet.getCell("L3:U3").value,
    phoneMode: worksheet.getCell("L5:L7").value,
    storageSize: {
      phoneMemorySize1: worksheet.getCell("M5").value,
      priceRange1: {
        new: worksheet.getCell("N5").text,
        A1: worksheet.getCell("O5").text,
        A2: worksheet.getCell("P5").text,
        B1: worksheet.getCell("Q5").text,
        B2: worksheet.getCell("R5").text,
        C: worksheet.getCell("S5").text,
        C_B: worksheet.getCell("T5").text,
        C_D: worksheet.getCell("U5").text,
      },
      phoneMemorySize2: worksheet.getCell("M6").value,
      priceRange2: {
        new: worksheet.getCell("N6").text,
        A1: worksheet.getCell("O6").text,
        A2: worksheet.getCell("P6").text,
        B1: worksheet.getCell("Q6").text,
        B2: worksheet.getCell("R6").text,
        C: worksheet.getCell("S6").text,
        C_B: worksheet.getCell("T6").text,
        C_D: worksheet.getCell("U6").text,
      },
      phoneMemorySize3: worksheet.getCell("M7").value,
      priceRange3: {
        new: worksheet.getCell("N7").text,
        A1: worksheet.getCell("O7").text,
        A2: worksheet.getCell("P7").text,
        B1: worksheet.getCell("Q7").text,
        B2: worksheet.getCell("R7").text,
        C: worksheet.getCell("S7").text,
        C_B: worksheet.getCell("T7").text,
        C_D: worksheet.getCell("U7").text,
      },
    },
  };
  return SellRequestTable;
};
