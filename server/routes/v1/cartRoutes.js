
const express = require("express");
const { userAuth } = require("../../middlewares/userAuth");
const {addToCart}=require("../../controller/cartContrllers")

const router = express.Router();

router.post("/add-to-cart", userAuth,addToCart);
//router.put("/remove", userAuth, removeFromCart);
//router.get("/", userAuth, getCart);

module.exports = { cartRouter: router };