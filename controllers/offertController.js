const OffertRepository = require('../repository/sequelize/OffertRepository')
const UserRepository = require('../repository/sequelize/UserRepository');
const ArtworkRepository = require('../repository/sequelize/ArtworkRepository');


exports.showOffertList = (req, res, next) => {
    let allUsers;
    UserRepository.getUsers()
        .then(users => {
            allUsers = users;
            return OffertRepository.getOffert();
        })
        .then(offerts => {
            res.render('pages/offerts/adminPanel-offerts', {
                offerts: offerts,
                users: allUsers,
                navLocation: 'offert'
            });
        })
}
exports.showOffertAdd = (req, res, next) => {
    let allArt, allUser;
    ArtworkRepository.getArtwork()
        .then(artworks => {
            allArt = artworks;
            return UserRepository.getUsers();
        })
        .then(users => {
            allUser = users;

            return OffertRepository.getOffert()
                .then(offert => {

                    res.render('pages/offerts/form', {
                        offert: {},
                        users: allUser,
                        artworks: allArt,
                        title: 'Add Offert',
                        formMode: 'createNew',
                        btnLabel: 'Add Offert',
                        formAction: '/offert/add',
                        navLocation: 'offert'
                    })
                });
        })

}
exports.showOffertEdit = (req, res, next) => {
    const offertId = req.params.offertId;
    let allArt, allUser;
    ArtworkRepository.getArtwork()
        .then(artworks => {
            allArt = artworks;
            return UserRepository.getUsers();
        })
        .then(users => {
            allUser = users;

            return OffertRepository.getOffertkById(offertId)
                .then(offert => {
                    temp = new Date(offert.purcharseDate).toISOString().slice(0, 10);

                    res.render('pages/offerts/form', {
                        offert: offert,
                        tempp: temp,
                        users: allUser,
                        artworks: allArt,
                        title: 'Edit Offert',
                        formMode: 'edit',
                        btnLabel: 'Confirm',
                        formAction: '/offert/edit',
                        navLocation: 'offert'
                    })
                });
        })

}
exports.showOffertDetails = (req, res, next) => {
    const offertId = req.params.offertId;
    let allArt, allUser;
    ArtworkRepository.getArtwork()
        .then(artworks => {
            allArt = artworks;
            return UserRepository.getUsers();
        })
        .then(users => {
            allUser = users;

            return OffertRepository.getOffertkById(offertId)
                .then(offert => {
                    temp = new Date(offert.purcharseDate).toISOString().slice(0, 10);

                    res.render('pages/offerts/form', {
                        offert: offert,
                        tempp: temp,
                        users: allUser,
                        artworks: allArt,
                        title: 'Offert Details',
                        formMode: 'details',
                        formAction: '/offert/details',
                        navLocation: 'offert'
                    })
                });
        })
    // res.render('pages/offerts/admin-offertDetails', { navLocation: 'offert' });
}


exports.addOffert = (req, res, next) => {
    const offert = { ...req.body };
    OffertRepository.createOffert(offert)
        .then(result => {
            res.redirect('/offert');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });
}
exports.updateOffert = (req, res, next) => {
    const offertId = req.body._id;
    const offert = { ...req.body };

    if (!offert.purcharseDate) {
        offert.purcharseDate = null
    }

    OffertRepository.updateOffert(offertId, offert)
        .then(result => {
            res.redirect('/offert');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });

};

exports.deleteOffert = (req, res, next) => {
    const offertId = req.params.offertId;
    OffertRepository.deleteOffert(offertId)
        .then(() => {
            res.redirect('/offert');
        });
};