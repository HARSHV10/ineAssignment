const express = require('express');
const menuControllers = require('../controller/menucontroller');
const router = express.Router();

router.get('/menuItems' , menuControllers.getMenuItems);
router.get('/filterMenuItem' , menuControllers.FilterItems);
router.post('/addMenuItem' , menuControllers.addItem);
router.get('/getMenuFromID' , menuControllers.getFromId);

module.exports = router;