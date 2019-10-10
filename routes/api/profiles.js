const express = require('express');
const router = express.Router();
const User = require('../../models/profile');
const usersCtrl = require('../../controllers/profiles');

router.post('/createProfile', usersCtrl.login);

module.exports = router;