const Artwork = require('../../model/sequelize/Artwork');
const Tag = require('../../model/sequelize/Tag');

exports.getTags = () => {
    return Tag.findAll();
}
exports.create = (tag) => {
    return Tag.create({
        name: tag.name
    })
};
exports.findById = (id) => {
    return Tag.findByPk(id, {
        include: [
            {
                model: Artwork,
                as: "artwork",
                through: {
                    attributes: ["tag_id", "artwork_id"],
                }
            },
        ],
    })
        .then((tag) => {
            return tag;
        })
};
exports.addArtwork = (tagId, artworkId) => {
    return Tag.findByPk(tagId)
        .then((tag) => {
            if (!tag) {
                console.log("Tag not found!");
                return null;
            }
            return Artwork.findByPk(artworkId).then((artwork) => {
                if (!artwork) {
                    console.log("Tutorial not found!");
                    return null;
                }

                tag.addArtwork(artwork);
                console.log(`>> added Tutorial id=${artwork.id} to Tag id=${tag.id}`);
                return tag;
            });
        })
        .catch((err) => {
            console.log(">> Error while adding Tutorial to Tag: ", err);
        });
};