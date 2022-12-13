const express = require('express');
const router = express.Router();
const {handdleRefreshToken} = require('../../controllers/refreshTokenController')

router.route('/')
    .get(handdleRefreshToken);

module.exports = router;