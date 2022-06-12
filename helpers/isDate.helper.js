const moment = require("moment");

const isDate = (date, res) => {
  if (
    !moment(
      date
      // "YYYY-MM-DD",
      // true
    ).isValid()
  ) {
    return res.status(400).json({
      ok: false,
      msg: "La fecha debe ser una fecha válida",
    });
  }
  return true;
};

module.exports = { isDate };
