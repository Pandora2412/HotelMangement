const express = require('express');
const router = express.Router();
const {handdleNewUser} = require('../../controllers/addaccountController');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

router.route('/')
    .post(verifyRoles(ROLES_LIST.Admin), handdleNewUser);

module.exports = router;