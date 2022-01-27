const express = require("express");
const app = express();
const port = 8080;
const env = require("dotenv").config();
app.use(express.json())
const routes = require('./routes/index')

const mongoose = require("mongoose"); //Connect to mongo server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to mongo database success.");
  })
  .catch((err) => {
    console.log(err);
  });


app.use('/', routes)

app.listen(port, () => {
  console.log('Server Running');
});
