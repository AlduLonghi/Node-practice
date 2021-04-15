const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// All books route
router.get('/', async (req, res) => {
  res.send('All Books');
})

// New book route
router.get('/new', (req, res) => {
   res.send('New book');
});

// Create book route

router.post('/', async (req, res) => {
   res.send('Create book');
});


module.exports = router;