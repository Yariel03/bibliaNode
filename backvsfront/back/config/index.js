const { consoleLog, Color } = require("yariel.dev-colors");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "./.env" });
}
if (!process.env.PORT) {
  consoleLog(Color.Red, "PORT is not defined in .env file");
}
if (!process.env.MONGO_URI) {
  consoleLog(Color.Red, "MONGO_URI not defined in .env file");
}
module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};
