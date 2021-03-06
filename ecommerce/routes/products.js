const express = require("express");
const ProductsService = require("../services/products");

const router = express.Router();
const productsService = new ProductsService();

router.get("/", async (req, res, next) => {
  const { tags } = req.query;

  try {
    const products = await productsService.getProducts({ tags });

    res.render("products", { products });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
