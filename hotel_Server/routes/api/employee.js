const express = require('express');
const router = express.Router();
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');
const {getAllEmployees, 
       createNewEmployee, 
       updateEmployee, 
       deleteEmployee,
       getEmployee} = require('../../controllers/employeesController');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Quanly), getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Quanly), createNewEmployee);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan),getEmployee)
    .put(verifyRoles(ROLES_LIST.Quanly), updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Quanly), deleteEmployee);

module.exports = router;