const mongoose = require('mongoose');
const Order = require('./orderSchema');

const userSchema = new mongoose.Schema({
    user_Id:{type : Number , required:true},
    user_name : String ,
    password : String , 
    role: { type: String, required: true, enum: ['user', 'staff'], default:'user' },
    cart :[{
        menuItem: { type: Number},
        quantity: { type: Number}
    }],
    OrderHistory:[]
})

const User = mongoose.model('User',userSchema);

module.exports = User;