/*
  Rutas de autenticación
  host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createUser, renewToken, loginUser } = require("../controllers/auth");
const { validateField } = require("../middlewares/field-validator");
const validateJWT = require("../middlewares/jwt-validate.middleware");

router.post(
  "/new",
  [
    // Multiple middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check(
      "password",
      "La contraseña debe de ser de al menos 6 caracteres"
    ).isLength({ min: 6 }),
    validateField,
  ],
  createUser
); // POST /api/auth/new

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").exists(),
    validateField,
  ],
  loginUser
); // POST /api/auth

router.get("/renew", validateJWT, renewToken); // GET /api/auth/renew

module.exports = router;
