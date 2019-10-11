const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    addProfile,
    getProfile,
    editProfile
};

function editProfile(req, res) {
    var profile = Profile.findOneAndUpdate({ _id: req.body.user });
    profile.push(req.body);
    profile.save();
    res.json(profile)

}

function addProfile(req, res) {
    var profile = new Profile(req.body);
    console.log(req.body);
    profile.save(function (err, savedProfile) {
        if (err) return res.status(400).json(err);
        res.json(savedProfile)
    })
}

async function getProfile(req, res) {
    var profile = await Profile.findOne({ user: req.params.id });
    console.log(profile);
    res.json(profile);
}

