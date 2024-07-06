const jwt = require("jsonwebtoken");

const secretKey = "your-secret-key";
const expiresIn = "1d";

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("token: ", authHeader);

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log("user: ", user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
