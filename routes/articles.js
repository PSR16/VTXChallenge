const express = require('express');
const router = express.Router();
const Articles = require('../models/articleModel');

router.get('/', async(req, res) => {
    try {
        const article = await Articles.find();
        res.json(article)
    } catch (err) {
        console.log(err)
        res.json("error")
    }
})

module.exports = router;