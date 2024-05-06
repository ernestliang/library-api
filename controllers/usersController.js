const express = require('express');
const usersService = require('../services/users.service.js');

const router = express.Router();
router.route('./users')
    .get(usersService.getAll)
router.route('./user')
    .put(usersService.update)
    .post(usersService.insert)
    .delete(usersService.delete)

module.exports = router;