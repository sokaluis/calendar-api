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
