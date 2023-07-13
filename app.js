require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMw = require("./middleware/not-found");
const errorMw = require("./middleware/error-handler");
const connectDB = require("./db/connect");

const Router = require("./routes/__route_name__");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/route", Router);
app.use(notFoundMw);
app.use(errorMw);

port = process.env.PORT || 5000;

const start = async () => {
  try {
    //await connectDB(process.env.URL);
    app.listen(port, console.log(`Listening on server ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
