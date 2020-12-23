exports.showUserList = (req, res, next) => {
    res.render('pages/adminPanel', { navLocation: 'user' });
}
exports.showUserEdit = (req, res, next) => {
    res.render('pages/users/admin-editUser', { navLocation: 'user' });
}
exports.showUserDetails = (req, res, next) => {
    res.render('pages/users/admin-userDetails', { navLocation: 'user' });
}
exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/admin-addUser', { navLocation: 'user' });
}