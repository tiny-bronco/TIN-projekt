const OffertRepository = require('../repository/sequelize/OffertRepository')
const UserRepository = require('../repository/sequelize/UserRepository');
const ArtworkRepository = require('../repository/sequelize/ArtworkRepository');

exports.showUserList = (req, res, next) => {
    UserRepository.getUsers()
        .then(users => {
            res.render('pages/adminPanel', {
                users: users,
                navLocation: 'user'
            });
        });
}
exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/form', {
        user: {},
        title: 'Add User',
        formMode: 'createNew',
        btnLabel: 'Add User',
        formAction: '/user/add',
        navLocation: 'user'
    });
}
exports.showUserEdit = (req, res, next) => {
    const userId = req.params.userId;
    UserRepository.getUserkById(userId)
        .then(user => {
            res.render('pages/users/form', {
                user: user,
                title: 'Edit user',
                formMode: 'edit',
                btnLabel: 'Confirm',
                formAction: '/user/edit',
                navLocation: 'user'
            });

        })

}
exports.showUserDetails = (req, res, next) => {
    const userId = req.params.userId;
    let allArt, allOffert;

    ArtworkRepository.getArtworkForUser(userId)
        .then(artworks => {
            allArt = artworks;
            return OffertRepository.getOffertForUser(userId)
                .then(offerts => {
                    allOffert = offerts;
                    return UserRepository.getUserkById(userId)
                        .then(user => {
                            res.render('pages/users/admin-userDetails', {
                                user: user,
                                artworks: allArt,
                                offerts: allOffert,
                                navLocation: 'user'
                            });

                        })

                })

        })

}
exports.addUser = (req, res, next) => {
    const user = { ...req.body };
    UserRepository.createUser(user)
        .then(result => {
            res.redirect('/user');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });
};
exports.updateUser = (req, res, next) => {
    const userId = req.body._id;
    const user = { ...req.body };
    UserRepository.updateUser(userId, user)
        .then(result => {
            res.redirect('/user');
        })
        .catch(function (err) {
            console.log(err, req.body);
        });

};

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    UserRepository.deleteUser(userId)
        .then(() => {
            res.redirect('/user');
        });
};
