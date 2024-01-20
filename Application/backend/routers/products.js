const request = require('request');
const express = require('express');
const router = express.Router();

router.get('/product/:barcode', (req, res) => {
    request(`https://world.openfoodfacts.org/api/v0/product/${req.params.barcode}.json`, (error, response, body) => {
        if(error) res.send(error);
        res.send(JSON.parse(body));
    });
});

module.exports = router;