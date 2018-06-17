const userRepository = require("../repositories/user.repository");
const userMapper = require("../mappers/UserMapper");
const userService = {};

userService.fetchUser = id => {
    return userRepository.get(id).then(userDo => {
        return userMapper.toClient(userDo);
    });
};

userService.updateUser = userDto => {
    return userRepository.update(userMapper.toServer(userDto));
};

module.exports = userService;
