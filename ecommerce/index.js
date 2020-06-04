const express = require("express");
const path = require("path");

const productsRouter = require("./routes/products");
const productsApiRouter = require("./routes/api/products");

// app
const app = express();

// middlewares
app.use(express.json());

// static files
app.use("/static", express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.use("/api/products", productsApiRouter);
app.use("/products", productsRouter);

// redirect
app.get("/", (req, res) => {
  res.redirect("/products");
});

// server init
const server = app.listen(3000, () => {
  console.log(`Escuchando en: http://localhost:${server.address().port}`);
});
