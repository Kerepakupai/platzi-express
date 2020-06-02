const express = require("express");
const path = require("path");

const productsRouter = require("./routes/products");
const productsApiRouter = require("./routes/api/products");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/api/products", productsApiRouter);
app.use("/products", productsRouter);

const server = app.listen(8000, () => {
  console.log(`Escuchando en: http://localhost:${server.address().port}`);
});
