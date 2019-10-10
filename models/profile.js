const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    photo: String,
    name: String,
    description: String,
    link: String
},
);

module.exports = mongoose.model('Profile', profileSchema);
