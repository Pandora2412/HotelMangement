const express = require('express');
const router = express.Router();
const logHistory = require('../../controllers/logHistory');

router.route('/:history')
    .post(logHistory);

module.exports = router;