const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      autoCreate: true,
      dbName: process.env.DB_NAME,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
    throw new Error("DB connection error", error);
  }
};

module.exports = dbConnection;
