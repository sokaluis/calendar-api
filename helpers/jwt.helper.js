const jwt = require("jsonwebtoken");

const generateToken = (uuid, name) =>
  new Promise((resolve, reject) => {
    const payload = { uuid, name };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          reject("Error signing token");
        } else {
          resolve(token);
        }
      }
    );
  });

module.exports = {
  generateToken,
};
