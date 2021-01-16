const ArtworkRepository = require('../repository/sequelize/ArtworkRepository')
const UserRepository = require('../repository/sequelize/UserRepository');
const TagRepository = require('../repository/sequelize/TagRepository');
const OffertRepository = require('../repository/sequelize/OffertRepository')


exports.showArtworkList = (req, res, next) => {
    let allUsers;
    UserRepository.getUsers()
        .then(users => {
            allUsers = users;
            return ArtworkRepository.getArtwork()
        })
        .then(artworks => {

            res.render('pages/artworks/adminPanel-artworks', {
                artworks: artworks,
                users: allUsers,
                artworkTags: {},
                tags: {},
                navLocation: 'artwork'
            });
        });
}
exports.showArtworkEdit = (req, res, next) => {
    const artID = req.params.artworkId;
    let allTags, allUser
    TagRepository.getTags()
        .then(tags => {
            allTags = tags;

            return UserRepository.getUsers();
        })
        .then(users => {
            allUser = users;

            return ArtworkRepository.getArtworkById(artID)
                .then(artwork => {

                    res.render('pages/artworks/form', {
                        users: allUser,
                        artwork: artwork,
                        offerts: {},
                        tags: allTags,
                        title: 'Edit Artwork',
                        formMode: 'edit',
                        btnLabel: 'Confirm',
                        formAction: '/artwork/edit',
                        navLocation: 'artwork'
                    })
                });
        })
}
exports.showArtworkDetails = (req, res, next) => {
    const artID = req.params.artworkId;
    let allTags, allUser, allOffert;
    TagRepository.getTags()
        .then(tags => {
            allTags = tags;

            return UserRepository.getUsers();
        })
        .then(users => {
            allUser = users;

            return OffertRepository.getOffertForArtwork(artID)
                .then(offerts => {
                    allOffert = offerts;

                    return ArtworkRepository.getArtworkById(artID)
                        .then(artwork => {

                            res.render('pages/artworks/form', {
                                users: allUser,
                                artwork: artwork,
                                offerts: allOffert,
                                tags: allTags,
                                title: 'Artwork Details',
                                formMode: 'details',
                                btnLabel: 'Edit',
                                formAction: '/artwork/edit',
                                navLocation: 'artwork'
                            })
                        })
                });
        })
}
exports.showArtworkAdd = (req, res, next) => {
    let allTags;
    TagRepository.getTags()
        .then(tags => {
            allTags = tags;

            return UserRepository.getUsers();
        })
        .then(users => {

            res.render('pages/artworks/form', {
                users: users,
                artwork: {},
                offerts: {},
                tags: allTags,
                title: 'Add Artwork',
                formMode: 'createNew',
                btnLabel: 'Add Artwork',
                formAction: '/artwork/add',
                navLocation: 'artwork'
            });
        })
}

exports.addArtwork = (req, res, next) => {
    const artwork = { ...req.body };
    ArtworkRepository.createArtwork(artwork)
        .then(result => {
            res.redirect('/artwork');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });
}
exports.updateArtwork = (req, res, next) => {
    const artworkId = req.body._id;
    const artwork = { ...req.body };
    console.log("dupa");

    ArtworkRepository.updateArtwork(artworkId, artwork)
        .then(result => {
            console.log("dupa3");
            res.redirect('/artwork');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });

};

exports.deleteArtwork = (req, res, next) => {
    const artworkId = req.params.artworkId;
    ArtworkRepository.deleteArtwork(artworkId)
        .then(() => {
            res.redirect('/artwork');
        });
};