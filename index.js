const express = require("express");
const reactViews = require("express-react-views");
const indexRouter = require("./routes/index")
const productsRouter = require("./routes/products");
const app = express();
const port = 8008;

app.use("/public", express.static("public")); // For serving static files
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.get("/", indexRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Te estamos escuchando en http://localhost:${port}`);
});
