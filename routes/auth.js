/*
  Rutas de autenticación
  host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createUser, renewToken, loginUser } = require("../controllers/auth");

router.post(
  "/new",
  [
    // Multiple middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
  ],
  createUser
); // POST /api/auth/new

router.post("/", loginUser); // POST /api/auth

router.get("/renew", renewToken); // GET /api/auth/renew

module.exports = router;
