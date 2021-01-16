const express = require('express');
const router = express.Router();

const offertController = require('../controllers/offertController');

router.get('/', offertController.showOffertList);
router.get('/add', offertController.showOffertAdd);
router.get('/edit/:offertId', offertController.showOffertEdit);
router.get('/details/:offertId', offertController.showOffertDetails);


router.post('/add', offertController.addOffert);
router.post('/edit', offertController.updateOffert);
router.get('/delete/:offertId', offertController.deleteOffert);



module.exports = router;