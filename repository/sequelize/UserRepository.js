
const User = require('../../model/sequelize/User');
const Artwork = require('../../model/sequelize/Artwork');
const Offert = require('../../model/sequelize/Offert');


exports.getUsers = () => {
    return User.findAll();
};

exports.getUserkById = (user_id) => {
    return User.findByPk(user_id, {
        indlude: [
            {
                model: Artwork,
                as: 'artworks',
                include: [{
                    model: Offert,
                    as: 'offerts'
                }]
            }]
    });
};
exports.createUser = (user) => {
    return User.create({
        username: user.username,
        password: user.password,
        email: user.email
    })
};
exports.updateUser = (user_id, userData) => {
    const username = userData.username;
    const password = userData.password;
    const email = userData.email;
    return User.update(userData, { where: { _id: user_id } });
}
exports.deleteUser = (user_id) => {
    return User.destroy({ where: { _id: user_id } })
}