const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const productsServices = new ProductsService();

router.get("/", async function (req, res, next) {
  // Los parámetros enviados como query params los obtenemos de la siguiente manera.
  // req.query donde obtenemos los siguiente { tags: [ 'nada', 'todo' ] }
  const { tags } = req.query;
  try {
    const products = await productsServices.getProducts({ tags });
    res.status(200).json({
      data: products,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async function (req, res, next) {
  // Con el :productId indicamos que enviaremos parámetros y cual es el nombre del parámetro
  // recuperamos dicho parámetro utilizando req.params
  // En req.params obtenemos { productId: '3' }
  // Capturamos eso en una constante
  const { productId } = req.params;

  try {
    const product = await productsServices.getProduct({ productId });
    res.status(200).json({
      data: product,
      message: "product retrieved",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  // en el post los datos los tenemos que sacar del body
  // Pero tambien necesitamos un middleware
  // Este middleware lo isntalamos usando 'npm install body-parse'
  // Este middleware es necesario para procesar cuerpo en formato json
  const { body: product } = req;
  // En req hay un campo llamado body. Lo que hacemos arriba es darle un alias a ese body
  // lo llamamos product
  console.log(product);

  try {
    const createdProduct = await productsServices.createProduct({ product });
    res.status(201).json({
      data: createdProduct,
      message: "product listed",
    });
  } catch (err) {
    next(err);
  }
});

// Aqui hay algo raro
router.put("/:productId", async function (req, res) {
  const { productId } = req.param;
  const { body: product } = req;
  console.log("req", req);

  try {
    const updatedProduct = await productsServices.updateProduct({
      productId,
      product,
    });
    res.status(200).json({
      data: updatedProduct,
      message: "product updated",
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async function (req, res) {
  const { productId } = req.param;
  const product = await productsServices.deleteProduct({ productId });
  console.log("req", req);

  try {
    res.status(200).json({
      data: product,
      message: "product deleted",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
