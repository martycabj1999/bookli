const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/detail/:id', function (req, res) {
    res.render('detail');
});

module.exports = router;
