const { response, request } = require("express");
const Event = require("../models/Event.model");

const getEvents = async (req = request, res = response) => {
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
  const { params } = req;

  res.json({
    ok: true,
    msg: "Evento actualizado",
    id: params.id,
  });
};

const deleteEvent = async (req = request, res = response) => {
  const { params } = req;

  res.json({
    ok: true,
    msg: "Evento eliminado",
    id: params.id,
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
