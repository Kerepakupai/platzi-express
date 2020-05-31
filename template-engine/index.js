const express = require("express");
const app = express();
const expressJsx = require("./express-jsx");

app.engine("jsx", expressJsx);
app.set("views", "./views");
app.set("view engine", "jsx");

app.get("/", (req, res, next) => {
  res.render("index", { hello: "hola", world: "mundo" });
});

const server = app.listen(8000, () => {
  console.log(`Escuchando en: http://localhost:${server.address().port}`);
});
