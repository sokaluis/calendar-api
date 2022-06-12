const { response, request } = require("express");

// Create User
const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    ok: true,
    mensaje: "Registro",
    name,
    email,
    password,
  });
};

// Login User
const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;
  res.status(200).json({
    ok: true,
    mensaje: "Login",
  });
};

// Renew Token
const renewToken = (req = request, res = response) => {
  res.json({
    ok: true,
    mensaje: "Renew",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
