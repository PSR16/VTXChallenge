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
                text: "The novel high-affinity competitive NMDA receptor antagonist, CGP39653, is employed as radioligand to autoradiographically label the NMDA receptor in rat and human brain. Glutamate dehydrogenase (GlDH; E.C.1.4.1.3) was added to the incubation buffer to degrade residual endogenous L-glutamate, which was not entirely removed from the section after the prewashing step and interfered with [3H]CGP39653 binding. At 20 nM [3H]CGP39653, GLDH increased specific binding as much as 5 times, depending on the dose of GlDH and the presence of NAD+, and hydrazine. Scatchard plots of binding data revealed that this increase was due to a decrease of the KD from 148 nM to 33 nM in the absence and the presence of GlDH, respectively. Addition of GlDH in the NMDA receptor autoradiographic assay may be of importance in quantitative studies with human brain tissue which may contain variable levels of endogenous L-glutamate."
            })
        })
        .catch(err => {
            console.log(err);
            alert(err);
        });
})

module.exports = router;