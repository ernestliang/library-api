const express = require('express');
const rolesService = require('../services/roles.service.js');

const router = express.Router();
router.route('./roles')
    .get(rolesService.getAll)
router.route('./role')
    .put(rolesService.update)
    .post(rolesService.insert)
    .delete(rolesService.delete)

module.exports = router;