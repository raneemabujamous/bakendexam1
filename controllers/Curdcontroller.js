"use strict";
const axios = require("axios");
const ModDrink = require("../module/moduleSchema");
const postMethod = async (req, res) => {
  const { strDrink, strDrinkThumb, idDrink } = req.body;
  const slug = strDrink.toLowerCase().split(" ").join("-");
  ModDrink.find({ slug: slug }, (error, data) => {
    if (data.length) {
      res.send("data exist");
    } else {
      const newMod = new ModDrink({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        slug: slug,
        idDrink: idDrink,
      });
      newMod.save();
      res.send(newMod);
    }
  });
};
const getPost = async (req, res) => {
  ModDrink.find({}, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
};
const deleteMethod = async (req, res) => {
  const slug = req.params.slug;
  ModDrink.remove({ slug: slug }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      ModDrink.find({}, (error, data) => {
        res.send(data);
      });
    }
  });
};
const updateMethod = async (req, res) => {
  const { strDrink, idDrink } = req.body;
  const slug = req.params.slug;
  ModDrink.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].strDrink = strDrink;
      data[0].idDrink = idDrink;
      data[0].save();

      res.send(data);
    }
  });
};
module.exports = { postMethod, getPost, deleteMethod, updateMethod };
