const { response, request } = require("express");
const { validationResult } = require("express-validator");

// Create User
const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.array(),
    });
  }

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
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.array(),
    });
  }

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
