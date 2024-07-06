const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/final-project")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("customer", userSchema);

async function createUser(userDetails) {
  const user = new User({
    username: userDetails.username,
    fullname: userDetails.fullname,
    address: userDetails.address,
    mobile: userDetails.mobile,
    email: userDetails.email,
    password: userDetails.password,
  });

  try {
    const newUser = await user.save();
    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating new user:", error);
  }
}

async function findUser(username, password) {
  try {
    const user = await User.findOne({ username, password });
    if (user && user.password === password) {
      console.log("User found:", user);
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error finding user:", error);
  }
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

//create sample input and add to database
// const product = new Product({
//   title: "product1",
//   price: "100",
//   description: "description1",
// });

// const product1 = new Product({
//   title: "product2",
//   price: "200",
//   description: "description2",
// });

// const product2 = new Product({
//   title: "product3",
//   price: "300",
//   description: "description3",
// });

// product.save();
// product1.save();
// product2.save();

//get all products from database
async function getAllProducts() {
  try {
    const products = await Product.find();
    console.log("All products:", products);
    return products;
  } catch (error) {
    console.error("Error finding products:", error);
  }
}

async function getProduct(id) {
  try {
    const product = await Product.findById(id);
    console.log("Product:", product);
    return product;
  } catch (error) {
    console.error("Error finding product:", error);
  }
}

module.exports = {
  createUser,
  findUser,
  getAllProducts,
  getProduct,
};
