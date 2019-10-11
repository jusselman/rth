const Profile = require('../models/profile');

module.exports = {
    addProfile
};

function addProfile(req, res) {
    var profile = new Profile(req.body);
    profile.save(function (err, savedProfile) {
        if (err) return res.status(400).json(err);
        res.json(savedProfile)
    })
}

