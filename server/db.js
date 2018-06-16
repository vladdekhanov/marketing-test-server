const Sequelize = require("sequelize");
const { db } = require("../settings.json");

let _dbContext = null;

const actionStorage = new Set();

onDbContextInit = action => {
    actionStorage.add(action);
};

dbContext = () => {
    return _dbContext;
};

const sequelize = new Sequelize(`postgres://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}?sslmode=require`);

sequelize
    .authenticate()
    .then(() => {
        console.log("DbContext is initialized: \u2713");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = { dbContext, onDbContextInit };
