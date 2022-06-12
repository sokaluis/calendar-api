const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ ok: false, message: "No token provided." });
  }
  try {
    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);
    req.name = name;
    req.uid = uid;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ ok: false, message: "Failed to authenticate token." });
  }
};

module.exports = { validateJWT };
