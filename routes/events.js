/*
  Rutas de Eventos del Calendario
  host + /api/events
*/
const { check } = require("express-validator");
const { Router } = require("express");

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events.controller");
const { validateField } = require("../middlewares/field-validator.middleware");
const { validateJWT } = require("../middlewares/jwt-validate.middleware");
const { isDate } = require("../helpers/isDate.helper");

const router = Router();

// Apply middleware to all routes
router.use(validateJWT);

router.get("/", getEvents); // GET /api/events
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("notes", "Las notas son obligatorias").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de fin es obligatoria").custom(isDate),
    validateField,
  ],
  createEvent
); // POST /api/events
router.put("/:id", updateEvent); // PUT /api/events/:id
router.delete("/:id", deleteEvent); // DELETE /api/events/:id

// Exportar el módulo router
module.exports = router;
