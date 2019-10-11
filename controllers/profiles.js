const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    addProfile,
    getProfile,
    editProfile
};

async function editProfile(req, res) {
    req.body.user.name = req.body.name;
    var profile = await Profile.findOneAndUpdate({ user: req.body.user._id }, req.body, { new: true });
    console.log(profile)

    // profile.save();
    return res.json(profile)
}

function addProfile(req, res) {
    var profile = new Profile(req.body);
    console.log(req.body.user);
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

