const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    type: String,
    id: String
});

module.exports = mongoose.model('Articles', articleSchema);
