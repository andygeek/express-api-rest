const express = require("express");
const router = express.Router();

const products = [
  {
    name: "Shoes",
    price: 75,
  },
  {
    name: "T-shirt",
    price: 300,
  },
];

router.get("/", function (req, res) {
  res.render("ProductsPage", { products });
});

module.exports = router;
