const { getModel } = require("../../db/model.factory");
const UserDto = require("../models/User");

const userRepository = {};

userRepository.get = id => {
    const UserDo = getModel("User");
    return UserDo.findOrCreate({ where: { id: id }, defaults: new UserDto(id, false, "") }).spread((user, isCreated) => {
        return user;
    });
};

userRepository.update = user => {
    const UserDo = getModel("User");
    return UserDo.update(user, { where: { id: user.id } });
};

module.exports = userRepository;
