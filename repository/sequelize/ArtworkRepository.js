
const User = require('../../model/sequelize/User');
const Artwork = require('../../model/sequelize/Artwork');
const Offert = require('../../model/sequelize/Offert');
const Tag = require('../../model/sequelize/Tag');
const ArtworkTags = require('../../model/sequelize/ArtworkTags');

const Sequelize = require('sequelize');


exports.getArtwork = () => {
    return Artwork.findAll();
};
exports.getArtworkForUser = (user_id) => {
    return Artwork.findAll({
        where: {
            user_id: user_id
        }
    });

}
exports.getArtworkById = (art_id) => {
    return Artwork.findByPk(art_id, {
        indlude: [
            {
                model: User,
                as: 'user',
                include: [{
                    model: Offert,
                    as: 'offerts'
                }]
            },
            {
                model: Tag,
                as: "tags",
                attributes: ["id", "name"],
                through: {
                    attributes: ["tag_id", "tutorial_id"],
                }
            }
        ]
    });
};
exports.createArtwork = (artwork) => {
    console.log("dupa2");

    return Artwork.create({
        title: artwork.title,
        description: artwork.description,
        user_id: artwork.user_id,
        file: artwork.file
    })
};
exports.updateArtwork = (art_id, artData) => {
    console.log("dupa2");

    const title = artData.title;
    const description = artData.description;
    const user_id = artData.user_id;
    const file = artwork.file;

    return Artwork.update(artData, { where: { _id: art_id } });
}
exports.deleteArtwork = (art_id) => {
    return Artwork.destroy({ where: { _id: art_id } })
}
exports.getTags = (art_id) => {
    const Op = Sequelize.Op;

    return ArtworkTags.findAll({
        where: {
            artwork_id: art_id
        }
    });
}