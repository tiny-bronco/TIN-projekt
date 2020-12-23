
const User = require('../../model/sequelize/User');
const Artwork = require('../../model/sequelize/Artwork');
const Offert = require('../../model/sequelize/Offert');


export, getUsers = () => {
    return User.findAll({
        indlude: [
            {
                model: User,
                as: 'user'
            },
            {
                model: Artwork,
                as: 'artwork'
            }
        ]
    });
}

exports.getArtworkById = (artwork) => {
    return Employment.findByPk(employmentId, {
        include: [
            {
                model: Employee,
                as: 'employee'
            },
            {
                model: Department,
                as: 'department'
            }]
    });
};