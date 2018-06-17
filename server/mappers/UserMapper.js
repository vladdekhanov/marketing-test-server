class UserMapper {
    toClient(userDo) {
        return {
            id: userDo.id,
            shared: userDo.shared,
            email: userDo.email
        };
    }
    toServer(userDto) {
        return {
            id: userDto.id,
            shared: userDto.shared,
            email: userDto.email
        };
    }
}

module.exports = new UserMapper();
