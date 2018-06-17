const sequelize = require("sequelize");
const UserModel = require("./models/user");

const storage = {};

const fillStorage = context => {
    storage.User = UserModel(context, sequelize);
    console.log("Db Models are initialized: \u2713");
};

const getModel = modelName => {
    return storage[modelName];
};

module.exports = { fillStorage, getModel };
