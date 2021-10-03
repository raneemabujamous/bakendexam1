"use strict";
const mongoose = require("mongoose");
const schemaShap = mongoose.Schema({
  strDrink: { type: String, unique: true },
  slug: { type: String, unique: true },
  strDrinkThumb: { type: String },
  idDrink: { type: String },
});
const ModDrink = mongoose.model("collection", schemaShap);
module.exports = ModDrink;
