const express = require('express');
const router = express.Router();
const {getMenu} = require('../../controllers/menuController');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), getMenu);

module.exports = router;