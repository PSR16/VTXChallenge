const express = require('express');
const router = express.Router();
const Articles = require('../models/articleModel');
const axios = require("axios");
const cheerio = require("cheerio");

//Get all article IDs
router.get('/', async(req, res) => {
    try {
        const article = await Articles.find();
        res.status(200).json(article)
    } catch (err) {
        console.log(err)
        res.status(400).json("error")
    }
});

//Get abstract of specific article
router.get('/:articleId', async (req, res) => {
    const articleId = req.params.articleId;
    const baseUrl = 'https://pubmed.ncbi.nlm.nih.gov/'
    axios.get(baseUrl + articleId)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html)
            const abstract = $('#enc-abstract').text().trim()
            res.status(200).send({
                text: abstract
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json("Error");
        });
});

module.exports = router;