const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Offert = sequelize.define('Offert', {
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
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    purcharseDate: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    artwork_id:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Offert;