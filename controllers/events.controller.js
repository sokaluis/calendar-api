const { response, request } = require("express");
const Event = require("../models/Event.model");

const getAllEvents = async (req = request, res = response) => {
  const events = await Event.find().populate("user", "name");

  res.json({
    ok: true,
    msg: "Todos los eventos",
    events,
  });
};

const createEvent = async (req = request, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uuid;
    const eventSaved = await event.save();

    return res.json({
      ok: true,
      msg: "Evento creado",
      eventSaved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al crear el evento",
      error,
    });
  }
};

const updateEvent = async (req = request, res = response) => {
  const {
    params: { id: eventId },
  } = req;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no encontrado",
      });
    }
    if (event.user.toString() !== req.uuid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes permiso para actualizar este evento",
      });
    }
    const newEvent = {
      ...req.body,
      user: req.uuid,
    };
    const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });
    res.json({
      ok: true,
      msg: "Evento actualizado",
      evento: eventUpdated,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al actualizar el evento",
      error,
    });
  }
};

const deleteEvent = async (req = request, res = response) => {
  const {
    params: { id: eventId },
  } = req;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no encontrado",
      });
    }
    if (event.user.toString() !== req.uuid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes permiso para actualizar este evento",
      });
    }
    await Event.findByIdAndDelete(eventId);
    res.json({
      ok: true,
      msg: "Evento eliminado",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar el evento",
      error,
    });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
