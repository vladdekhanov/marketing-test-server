const Sequelize = require("sequelize");
const settings = require("../settings.json");

let _dbContext = null;

const actionStorage = new Set();

onDbContextInit = action => {
    actionStorage.add(action);
};

dbContext = () => {
    return _dbContext;
};

const sequelize = new Sequelize(settings.dbConnectionString);

sequelize
    .authenticate()
    .then(() => {
        console.log("DbContext is initialized: \u2713");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = { dbContext, onDbContextInit };
