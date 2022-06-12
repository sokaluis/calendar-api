const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const { generateToken } = require("../helpers/jwt.helper");

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

    // Generate token
    const token = await generateToken(user.id, user.name);

    res.status(201).json({
      ok: true,
      mensaje: "Registro",
      token,
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
    const token = await generateToken(user.id, user.name);

    res.status(200).json({
      ok: true,
      mensaje: "Login",
      token,
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
const renewToken = async (req = request, res = response) => {
  const { uid, name } = req;
  const token = await generateToken(uid, name);

  res.json({
    ok: true,
    mensaje: "Renew",
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
