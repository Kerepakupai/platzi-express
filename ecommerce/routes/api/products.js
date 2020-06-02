const express = require("express");
const productsMock = require("../../utils/mocks/products");

const router = express.Router();

router.get("/", (req, res) => {
  const { query } = req.query;

  res.status(200).json({
    data: productsMock,
    message: "products listed",
  });
});

router.get("/:productId", (req, res) => {
  const { products } = req.params;

  res.status(200).json({
    data: productsMock[0],
    message: "product retrieved",
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    data: productsMock[0],
    message: "product created",
  });
});

router.put("/:productId", (req, res) => {
  res.status(200).json({
    data: productsMock[0],
    message: "product updated",
  });
});

router.delete("/:productId", (req, res) => {
  res.status(200).json({
    data: productsMock[0],
    message: "product deleted",
  });
});

module.exports = router;
