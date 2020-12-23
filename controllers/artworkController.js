exports.showArtworkList = (req, res, next) => {
    res.render('pages/artworks/adminPanel-artworks', { navLocation: 'artwork' });
}
exports.showArtworkEdit = (req, res, next) => {
    res.render('pages/artworks/admin-editArtwork', { navLocation: 'artwork' });
}
exports.showArtworkDetails = (req, res, next) => {
    res.render('pages/artworks/admin-artworkDetails', { navLocation: 'artwork' });
}
exports.showArtworkAdd = (req, res, next) => {
    res.render('pages/artworks/admin-addArtwork', { navLocation: 'artwork' });
}