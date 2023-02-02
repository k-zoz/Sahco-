require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

//express
const express = require("express");
const app = express();

//database connection
const connectDB = require("./db/connect");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//router
const adminRouter = require("./routes/adminRoutes");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

//routes
app.use("/admin", adminRouter);

//middleware usage
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = 8000 || process.env.PORT;

const StartServer = async () => {
  await connectDB();
  app
    .listen(PORT, () => {
      console.log(`Server is listening on port ${PORT} `);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
