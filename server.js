const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors()); // after you initialize your express app instance
require("dotenv").config();
const axios = require("axios"); // require the package
app.use(express.json());
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const { apiData } = require("./controllers/Api.controller");
const {
  postMethod,
  getPost,
  deleteMethod,
  updateMethod,
} = require("./controllers/Curdcontroller");
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

app.post("/postmethod", postMethod);
app.get("/getpost", getPost);
app.delete("/deletemethod:slug", deleteMethod);
app.put("/updateMethod:slug", updateMethod);
app.get("/apidata", apiData);
app.get("/", (req, res) => {
  res.send("hello form test");
});
app.listen(PORT, (req, res) => {
  console.log(`listen to port ${PORT}`);
});
