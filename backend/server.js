const express = require("express");
const mongoose = require("mongoose");
const TodoModel = require("./models/model");
const cors = require("cors");
require("dotenv").config();
const routes = require('./routes/routes'); // Import the routes module

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected Succssfully!");
});


app.use('/',routes)

app.listen(port, () => {
  console.log(`App is running on Port : ${port}`);
});
