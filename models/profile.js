const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    photo: String,
    name: String,
    description: String,
},
);

module.exports = mongoose.model('Profile', profileSchema);
