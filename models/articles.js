const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    type: String,
    id: String
});

module.exports.Articles = mongoose.model('Article', articleSchema);
