const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['pubmed', 'omim', 'hgmd']
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Articles', articleSchema);
