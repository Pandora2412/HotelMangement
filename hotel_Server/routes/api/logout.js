const express = require('express');
const router = express.Router();
const {handdleLogout} = require('../../controllers/logoutController')

router.route('/')
    .get(handdleLogout);

module.exports = router;