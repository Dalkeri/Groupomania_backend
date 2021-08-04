const express = require('express');
const router = express.Router();
// console.log("user routes")

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;