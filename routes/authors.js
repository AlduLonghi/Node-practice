const express = require('express');
const router = express.Router();
const Author = require('../models/auhtor');

// All authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New author route
router.get('/new', (req, res) => {
    res.render('authors/new', {authors: new Author() })
});

// Create author route

router.post('/', (req, res) => {
    res.send('Create')
});


module.exports = router;