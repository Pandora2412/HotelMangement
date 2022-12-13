const express = require('express');
const router = express.Router();
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');
const {getAllCustomers, 
       createNewCustomer, 
       updateCustomer, 
       deleteCustomer,
       getCustomer} = require('../../controllers/customersController');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), getAllCustomers)
    .post(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), createNewCustomer);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan),getCustomer)
    .put(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), updateCustomer)
    .delete(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), deleteCustomer);

module.exports = router;