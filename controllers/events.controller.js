const { response, request } = require("express");

const getEvents = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Todos los eventos",
  });
};

const createEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Evento creado",
  });
};

const updateEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Evento actualizado",
  });
};

const deleteEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Evento eliminado",
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
