const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const products = [
  { id: 1, name: "Bottle", price: 250 },
  { id: 2, name: "Bag", price: 500 },
  { id: 3, name: "Notebook", price: 100 }
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome! Server is running. Use /products to see products.");
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add to cart
app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const totalPrice = product.price * quantity;
  res.json({ productId, quantity, totalPrice });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
