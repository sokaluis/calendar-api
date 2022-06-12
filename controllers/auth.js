const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

// Create User
const createUser = async (req = request, res = response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        mensaje: "User already exists",
      });
    }
    user = new User(req.body);

    // Hash password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Save user
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
const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        mensaje: "User not found",
      });
    }

    // Compare password
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        ok: false,
        mensaje: "Password incorrect",
      });
    }

    // Generate token

    res.status(200).json({
      ok: true,
      mensaje: "Login",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      mensaje: "Error al iniciar session",
      error,
    });
  }
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
