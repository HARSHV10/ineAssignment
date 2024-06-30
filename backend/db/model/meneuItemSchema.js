const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  item_Id:{type : Number , required:true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  category: { type: String, required: true, enum: ['appetizers', 'main courses', 'desserts', 'drinks'] }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;