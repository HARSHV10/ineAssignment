const express = require('express')
const orderController = require('../controller/orderController');
const {authenticateToken} = require('../middleware/authenticateToken'); 
const {authenticateStaff}=require('../middleware/athenticateRole');
const router = express.Router();


router.get('/getAllOrders',authenticateToken,orderController.getAllOrder)
router.get('/getActiveOrder',authenticateToken,authenticateStaff,orderController.getActiveOrder)
router.post('/placeOrder',authenticateToken, orderController.placeOrder)
router.delete('/removeOrder',authenticateToken, orderController.removeOrder)
router.put('/updateOrder',authenticateToken, orderController.updateOrder)
router.post('/markCompleted',authenticateToken,authenticateStaff, orderController.markCompleted)
router.post('/addToCart' , authenticateToken, orderController.addToCart)
router.post('/updateCartQuantity' , authenticateToken, orderController.updateCartQuantity)
router.post('/removeFromCart' , authenticateToken, orderController.removeFromCart);
router.get('/GetOrder',authenticateToken,orderController.GetOrder);
module.exports = router