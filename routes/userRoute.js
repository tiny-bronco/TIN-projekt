const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
// userID crashuje, czas na baze danych
router.get('/', userController.showUserList);
router.get('/edit/:userId', userController.showUserEdit);
router.get('/details/:userId', userController.showUserDetails);
router.get('/add', userController.showUserAdd);


module.exports = router;