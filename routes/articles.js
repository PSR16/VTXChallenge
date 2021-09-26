var express = require('express');
var router = express.Router();
var { Article } = require('../models/articles');

router.get('/', function (req, res, next) {
    res.send("Hi there")
    //const articles = await Article.find()
    //res.render('index', {title: 'Articles', articles: articles} )
})

module.exports = router;