const express = require('express');
const router = express.Router();

const artworkController = require('../controllers/artworkController');

router.get('/', artworkController.showArtworkList);
router.get('/add', artworkController.showArtworkAdd);
router.get('/edit/:artworkId', artworkController.showArtworkEdit);
router.get('/details/:artworkId', artworkController.showArtworkDetails);

router.post('/add', artworkController.addArtwork);
router.post('/edit', artworkController.updateArtwork);
router.get('/delete/:artworkId', artworkController.deleteArtwork);


module.exports = router;