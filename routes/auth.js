/*
  Rutas de autenticación
  host + /api/auth
*/

const { Router } = require("express");
const { createUser, renewToken, loginUser } = require("../controllers/auth");
const router = Router();

router.post("/", loginUser); // POST /api/auth

router.get("/renew", renewToken); // GET /api/auth/renew

router.post("/new", createUser); // POST /api/auth/new

module.exports = router;
