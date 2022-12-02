const express = require('express');
const router = express.Router();
const {handdleLogin} = require('../../controllers/authController')

router.route('/')
    .post(handdleLogin);

module.exports = router;