const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Artwork = sequelize.define('Artwork', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //wiele tagów
    tags: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    uploadDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    file:
    {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Artwork;