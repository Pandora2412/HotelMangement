const express = require('express');
const router = express.Router();
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');
const {getNewFormNum, 
    createNewForm, 
    updateForm, 
    getForm} = require('../../controllers/customerbillsController');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), getNewFormNum)
    .post(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), createNewForm)
    .put(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), updateForm);

router.route('/:formnum')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), getForm);

module.exports = router;