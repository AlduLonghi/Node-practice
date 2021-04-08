const express = require('express');
const router = express.Router();

// All authors route
router.get('/', (req, res) => {
    res.render('index')
})

// New author route
router.get('/', (req, res) => {
    res.render('index')
});

// Create author route

router.post('/', (req, res) => {
    res.send('Create')
});


module.exports = router;