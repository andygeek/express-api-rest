const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const productsService = new ProductsService();

router.get("/", async function (req, res, next) {
  const { tags } = req.query;

  try {
    const products = await productsService.getProducts();
    res.render("ProductsPage", { products });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
