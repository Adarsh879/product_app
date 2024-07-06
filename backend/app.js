const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRouter = require("./src/routes/user_routes");
const ProductsRouter = require("./src/routes/product_router");

// Create an instance of Express
const app = express();

// Middleware to parse request body
app.use(bodyParser.json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/products", ProductsRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
