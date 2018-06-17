const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const { db } = require("../settings.json");
const { fillStorage } = require("./model.factory");

let _dbContext = null;

const context = () => {
    return _dbContext;
};

const initDb = () => {
    let dbSettings = {
        dialect: "postgres",
        host: db.host,
        port: db.port
    };
    if (db.useSsl) {
        dbSettings.ssl = true;
        dbSettings.dialectOptions = { ssl: { ca: fs.readFileSync(path.join(__dirname, "../db/config/ca.crt")) } };
    }
    _dbContext = new Sequelize(db.database, db.username, db.password, dbSettings);

    _dbContext
        .authenticate()
        .then(() => {
            console.log("DbContext is initialized: \u2713");
            fillStorage(_dbContext);
        })
        .catch(err => {
            console.error("Unable to connect to the database:", err);
        });
};

module.exports = { initDb, context };
