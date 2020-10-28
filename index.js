const express = require("express");
const path = require("path");
const reactViews = require("express-react-views");
const indexRouter = require("./routes/views/index");
const productsRouter = require("./routes/views/products");
const productApiRouter = require("./routes/api/products");
const bodyParser = require("body-parser");
const port = 8008;

// App
const app = express();

// El middleware para procesar json del body
app.use(bodyParser.json());

// Manejo de los archivos estáticos
app.use("/public", express.static("public")); // For serving static files

// View engine
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

// Routees
app.get("/", indexRouter);
app.use("/products", productsRouter);
app.use("/api/products", productApiRouter);

// Redirect
/*
app.get("/", function(req, res){
  res.redirect("/products");
});
*/

// Server
app.listen(port, () => {
  console.log(`Te estamos escuchando en http://localhost:${port}`);
});
