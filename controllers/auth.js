const { response, request } = require("express");
const User = require("../models/User.model");

// Create User
const createUser = async (req = request, res = response) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      mensaje: "Registro",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mensaje: "Error al registrar",
      error,
    });
  }
};

// Login User
const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;
  res.status(200).json({
    ok: true,
    mensaje: "Login",
    email,
    password,
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
