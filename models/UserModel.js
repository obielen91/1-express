const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: String,
    username: String,
    address: Object,
    website: String,
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', User);
