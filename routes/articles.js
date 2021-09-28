const express = require('express');
const router = express.Router();
const Articles = require('../models/articleModel');
const axios = require("axios");
const cheerio = require("cheerio")

//Get all article IDs
router.get('/', async(req, res) => {
    try {
        const article = await Articles.find();
        res.json(article)
    } catch (err) {
        console.log(err)
        res.json("error")
    }
})

//Get abstract of specific article
router.get('/:articleId', async (req, res) => {
    const articleId = req.params.articleId;
    const baseUrl = 'https://pubmed.ncbi.nlm.nih.gov/'
    axios.get(baseUrl + req.params.articleId)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html)
            const abstract = $('#enc-abstract').text().trim()
            res.send({
                text: abstract
            })
        })
        .catch(err => {
            console.log(err);
            alert(err);
        });
})

module.exports = router;