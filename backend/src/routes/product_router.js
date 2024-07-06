const express = require("express");
const { getAllProducts, getProduct } = require("../dbservice");
const router = express.Router();

// Get all products
router.get("/getall", async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  const product = await getProduct(id);
  res.json(product);
});

module.exports = router;
