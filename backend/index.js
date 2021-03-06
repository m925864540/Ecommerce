const express = require("express");
const app = express();
const port = 8080;
// const env = require("dotenv").config({ path: '../.env' });
const routes = require('./routes/index')
const cors= require('cors')
const mongoose = require("mongoose"); //Connect to mongo server

mongoose
  .connect("mongodb+srv://m925864540:mike123456@cluster0.lxuc2.mongodb.net/store?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connect to mongo database success.");
  })
  .catch((err) => {
    console.log(err);
  });

  
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(port, () => {
  console.log('Server Running');
});
