const express = require('express');
const accessLogsService = require('../services/accessLogs.service.js');

const router = express.Router();
router.route('./logs')
    .get(accessLogsService.getAll)
router.route('./log')
    .put(accessLogsService.update)
    .post(accessLogsService.insert)
    .delete(accessLogsService.delete)

module.exports = router;