const productsMock = require("../utils/mocks/products");
const MongoLib = require("../lib/mongo");

class ProductsService {
  constructor() {
    this.collection = "products";
    this.mongoDb = new MongoLib();
  }

  async getProducts({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const products = await this.mongoDb.getAll(this.collection, query);
    return products || [];
  }

  getProduct({ productId }) {
    return Promise.resolve(productsMock[0]);
  }

  createProduct({ product }) {
    return Promise.resolve(productsMock[0]);
  }

  updateProduct({ productId, product }) {
    return Promise.resolve(productsMock[0]);
  }

  deleteProduct({ productId }) {
    return Promise.resolve(productsMock[0]);
  }
}

module.exports = ProductsService;
