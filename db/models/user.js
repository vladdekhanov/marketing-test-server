"use strict";
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define(
        "User",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true },
            shared: DataTypes.BOOLEAN,
            email: DataTypes.STRING
        },
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
