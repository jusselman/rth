const Profile = require('../models/profile');

module.exports = {
    createProfile
};

function createProfile(req, res) {
    var profile = new Profile(req.body);
    profile.save(function (err, savedProfile) {
        if (err) return res.redirect('/profile');
        res.redirect('/')
    })
}

