const express = require('express');
const router = express.Router();
const Profile = require('../../models/profile');
const profilesCtrl = require('../../controllers/profiles');

router.post('/createProfile', profilesCtrl.addProfile);
router.delete('/:id', profilesCtrl.deleteProfile);
router.get('/user/:id', profilesCtrl.getProfileWithUserID);
router.get('/:id', profilesCtrl.getProfile);
router.put('/editProfile', profilesCtrl.editProfile);

module.exports = router;

