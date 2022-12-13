const express = require('express');
const router = express.Router();
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');
const {getRooms, 
    deleteBookday,
    addBookday,
    updateBookday,
    getSpecificRoomServices} = require('../../controllers/roomsController');

router.route('/')
    .post(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), addBookday)
    .put(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), updateBookday);

router.route('/:formnum')
    .put(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), deleteBookday);

router.route('/:checkin/:checkout')
    .post(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan), getSpecificRoomServices);

router.route('/:state/:toa')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan),getRooms);
    
router.route('/:state/:toa/:checkin/:checkout')
    .get(verifyRoles(ROLES_LIST.Quanly, ROLES_LIST.Letan),getRooms);

module.exports = router;