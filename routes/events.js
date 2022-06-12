/*
  Rutas de Eventos del Calendario
  host + /api/events
*/
const { Router } = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events.controller");
const { validateJWT } = require("../middlewares/jwt-validate.middleware");

const router = Router();

router.get("/", validateJWT, getEvents); // GET /api/events
router.post("/", validateJWT, createEvent); // POST /api/events
router.put("/:id", validateJWT, updateEvent); // PUT /api/events/:id
router.delete("/:id", validateJWT, deleteEvent); // DELETE /api/events/:id

// Exportar el módulo router
module.exports = router;
