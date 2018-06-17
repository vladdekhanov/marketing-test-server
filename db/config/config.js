const fs = require("fs");
const { db } = require("../../settings.json");

const configs = {
    development: {
        username: db.username,
        password: db.password,
        database: db.database,
        host: db.host,
        port: db.port,
        dialect: "postgres"
    },
    production: {
        username: db.username,
        password: db.password,
        database: db.database,
        host: db.host,
        port: db.port,
        dialect: "postgres"
    }
};

const sslOptions = {
    ssl: {
        ca: fs.readFileSync(__dirname + "/ca.crt")
    }
};

if (db.useSsl) {
    configs.development.ssl = true;
    configs.development.dialectOptions = sslOptions;
    configs.production.ssl = true;
    configs.production.dialectOptions = sslOptions;
}

module.exports = configs;
