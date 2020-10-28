require("dotenv").config();
// Lo que hace el codigo de arriba es coger tooda la info que esta
// en el archivo .env y lo mueve a las variables de entorno respectivas.

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};

module.exports = { config };
