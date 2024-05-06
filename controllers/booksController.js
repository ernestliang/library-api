const express = require('express');
const booksService = require('../services/books.service.js');

const router = express.Router();
router.route('./books')
    .get(booksService.getAll)
router.route('./book')
    .put(booksService.update)
    .post(booksService.insert)
    .delete(booksService.delete)

module.exports = router;