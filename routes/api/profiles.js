const express = require('express');
const router = express.Router();
const Profile = require('../../models/profile');
const profilesCtrl = require('../../controllers/profiles');

router.post('/createProfile', profilesCtrl.addProfile);

module.exports = router;