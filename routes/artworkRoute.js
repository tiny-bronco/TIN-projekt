const express = require('express');
const router = express.Router();

const artworkController = require('../controllers/artworkController');

router.get('/', artworkController.showArtworkList);
router.get('/edit/:artId', artworkController.showArtworkEdit);
router.get('/details/:artId', artworkController.showArtworkDetails);
router.get('/add', artworkController.showArtworkAdd);


module.exports = router;