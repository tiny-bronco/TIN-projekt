const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.showUserList);
router.get('/add', userController.showUserAdd);
router.get('/edit/:userId', userController.showUserEdit);
router.get('/details/:userId', userController.showUserDetails);

router.post('/add', userController.addUser);
router.post('/edit', userController.updateUser);
router.get('/delete/:userId', userController.deleteUser);


module.exports = router;