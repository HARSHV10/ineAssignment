const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_Id:{type : Number , required:true},
    tableNumber: { type: Number, required: true },
    OrderStatus: { type: String, required: true,  enum: ['pending', 'completed'], default : "pending"},
    User: { type: String, required: true , immutable: true},
    items: [{
        menuItem: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
