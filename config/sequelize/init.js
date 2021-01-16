const sequelize = require('./sequelize');

const User = require('../../model/sequelize/User');
const Artwork = require('../../model/sequelize/Artwork');
const Offert = require('../../model/sequelize/Offert');
const Tag = require('../../model/sequelize/Tag');
const TagRepository = require('../../repository/sequelize/TagRepository');


module.exports = () => {
    User.hasMany(Artwork, { as: 'artworks', foreignKey: { name: 'user_id', allowNull: false }, constrains: true, onDelete: 'CASCADE' });
    Artwork.belongsTo(User, { as: 'user', foreignKey: { name: 'user_id', allowNull: false } });

    User.hasMany(Offert, { as: 'offerts', foreignKey: { name: 'owner_id', allowNull: false }, constrains: true, onDelete: 'CASCADE' });
    Offert.belongsTo(User, { as: 'owner', foreignKey: { name: 'owner_id', allowNull: false } });
    Offert.belongsTo(User, { as: 'buyer', foreignKey: { name: 'customer_id', allowNull: true } });

    Artwork.hasMany(Offert, { as: 'offerts', foreignKey: { name: 'artwork_id', allowNull: false }, constrains: true, onDelete: 'CASCADE' });
    Offert.belongsTo(Artwork, { as: 'artwork', foreignKey: { name: 'artwork_id', allowNull: false } });

    Artwork.belongsToMany(Tag, { as: 'tags', through: "ArtworkTags", foreignKey: { name: 'artwork_id', allowNull: true } });
    // wiele-do-wile ArtworkTags
    // jeden do wiele?
    //
    Tag.belongsToMany(Artwork, { as: 'artworks', through: "ArtworkTags", foreignKey: { name: 'tag_id', allowNull: false } });


    let allUsers, allArtworks;

    return sequelize
        .sync({ force: true })
        .then(() => {
            return User.findAll();
        })
        .then(users => {
            if (!users || users.length == 0) {
                return User.bulkCreate([
                    { username: 'trueartist', password: 'ads#@5#fj', email: 'ta@gmail.com' },
                    { username: 'paprotka333', password: 'QQ111111', email: 'paprocie@gmail.com' },
                    { username: 'alfonsomucha', password: 'muucha1', email: 'a.mucha@outlook.com' },
                ])
                    .then(() => {
                        return User.findAll();
                    });
            } else {
                return users;
            }
        })
        .then(users => {
            allUsers = users;
            return Artwork.findAll();
        })
        .then(arts => {
            if (!arts || arts.length == 0) {
                return Artwork.bulkCreate([
                    {
                        title: 'Mona Lisa', description: 'The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.',
                        user_id: allUsers[0]._id,
                        file: '..\Images/ 300px - Mona_Lisa, _by_Leonardo_da_Vinci, _from_C2RMF_retouched.jpg'
                    },
                    {
                        title: 'Mononoke Hime', description: 'Miyazaki Hayao film promotion material', user_id: allUsers[1]._id,
                        file: 'Images/san and kodama.jpg'
                    }
                ])
                    .then(() => {
                        return Artwork.findAll();
                    });
            } else {
                return arts;
            }
        })
        .then(arts => {
            allArtworks = arts;
            return Offert.findAll();
        })
        .then(offerts => {
            if (!offerts || offerts.length == 0) {
                return Offert.bulkCreate([
                    {
                        title: 'Mona Lisa like portrait', description: 'I offer for traditional portrait.<br>100x80 size',
                        price: '10', owner_id: allArtworks[0].user_id,
                        customer_id: null, purcharseDate: null, artwork_id: allArtworks[0]._id
                    },
                    {
                        title: 'Concept art', description: 'Concept art piece in Ghibli style',
                        price: '25', owner_id: allArtworks[1].user_id,
                        customer_id: allUsers[0]._id, purcharseDate: '2020-09-11', artwork_id: allArtworks[1]._id
                    }
                ])
                    .then(() => {
                        return Offert.findAll();
                    });

            } else {
                return offerts;
            }
        })
        .then(() => {
            return Tag.findAll();
        })
        .then(tags => {
            if (!tags || tags.length == 0) {
                return Tag.bulkCreate([
                    {
                        name: 'portrait'
                    },
                    {
                        name: 'concept art'
                    }
                ])
                    .then(() => {
                        return Tag.findAll();
                    });
            } else {
                return tags;

            }
        })
        .then(() => {
            TagRepository.addArtwork(1, 1);
            TagRepository.addArtwork(1, 2);

        });
};


