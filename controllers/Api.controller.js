"use strict";
const APImod = require("../module/ApiModule");
const axios = require("axios");
const { response } = require("express");

const apiData = async (req, res) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
  await axios.get(url).then((response) => {
    const reqFromUrl = response.data.drinks.map((item) => {
      return new APImod(item);
    });
    res.send(reqFromUrl);
  });
};
module.exports = { apiData };
