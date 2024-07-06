const express = require("express");
const { createUser, findUser } = require("../dbservice");
const { generateToken } = require("../utils/token");
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await findUser(username, password);
  console.log(user);
  if (user) {
    const token = generateToken({ id: user._id });
    console.log(token);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Signup route
router.post("/signup", async (req, res) => {
  const data = req.body;

  const user = await createUser(data);
  if (user) {
    const token = generateToken({ id: user._id });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
