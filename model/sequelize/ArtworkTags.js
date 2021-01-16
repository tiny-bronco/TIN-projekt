const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ArtworkTags = sequelize.define('ArtworkTags', {
    artwork_id: {
        type: Sequelize.INTEGER,
    },
    tag_id: {
        type: Sequelize.STRING,
    }
});

module.exports = ArtworkTags;