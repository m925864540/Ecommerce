const express = require("express");
const app = express();
const port = 8080;
const env = require("dotenv").config();
const routes = require('./routes/index')
const cors= require('cors')

const mongoose = require("mongoose"); //Connect to mongo server
mongoose
  .connect(process.env.MONGO_URL)
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
