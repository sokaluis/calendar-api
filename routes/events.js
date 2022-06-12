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

// Apply middleware to all routes
router.use(validateJWT);

router.get("/", getEvents); // GET /api/events
router.post("/", createEvent); // POST /api/events
router.put("/:id", updateEvent); // PUT /api/events/:id
router.delete("/:id", deleteEvent); // DELETE /api/events/:id

// Exportar el módulo router
module.exports = router;
