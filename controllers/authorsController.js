const express = require('express');
const authorsService = require('../services/authors.service.js');

const router = express.Router();
router.route('./authors')
    .get(authorsService.getAll)
router.route('./author')
    .put(authorsService.update)
    .post(authorsService.insert)
    .delete(authorsService.delete)

module.exports = router;