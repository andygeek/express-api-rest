// Este archivo tendrá toda la configuracion de conexion a mongo
// usando el mongo-uri junto con las credenciales
const { MongoClient } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`; // Prettier ignore

// Necesitas configurar mongo con mongo Atlas

class MongoLib {
  constructor() {
    console.log("MONGO_URI", MONGO_URI);
    // El segundo parametro es necesario segun la documentacion
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }
  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if (error) {
          reject(error);
        }
        console.log("Conectado exitosamente a Mongo");
        resolve(this.client.db(this.dbName));
      });
    });
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query).toArray();
    });
  }
}

module.exports = MongoLib;
