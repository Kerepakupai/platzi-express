const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send({ Hello: "World" });
});

const server = app.listen(3000, () => {
  console.log(
    `Servidor escuchando en http://localhost:${server.address().port}`
  );
});
