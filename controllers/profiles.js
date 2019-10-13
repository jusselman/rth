const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    addProfile,
    getProfile,
    editProfile,
    deleteProfile,
    getProfileWithUserID
};

async function deleteProfile(req, res) {
    console.log(Profile.findById(req.params.id))
    var profile = await Profile.findByIdAndDelete(req.params.id);
    console.log(typeof (profile))
    return res.json(profile)
}

async function editProfile(req, res) {
    // console.log(Profile.findById(req.params.id))
    console.log('hello')
    req.body.user.name = req.body.name;
    var profile = await Profile.findOneAndUpdate({ user: req.body.user._id }, req.body, { new: true });
    return res.json(profile)
}

function addProfile(req, res) {
    var profile = new Profile(req.body);
    profile.save(function (err, savedProfile) {
        if (err) return res.status(400).json(err);
        res.json(savedProfile)
    })
}

async function getProfile(req, res) {
    var profile = await Profile.findById(req.params.id);
    res.json(profile);
}

async function getProfileWithUserID(req, res) {
    var profile = await Profile.find({ user: req.params.id });
    if (profile) return res.json(profile[0]);
    return res.json('');
}

