const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Tag = sequelize.define('Tag', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tag;