const Order = require('../db/model/orderSchema');
const User = require('../db/model/userSchema');

const getAllOrder = async (req, res)=>{
    console.log("searching for data in the database . . . ");
    
    const data = await Order.find({User:req.user.username}).then((data)=>{;
    // console.log(data);
    res.status(200).json(data);}).catch((err)=>{
        console.log(err)
        res.status(400).json(err);
    })
}

const getActiveOrder = async (req, res)=>{
    console.log("searching for data in the database . . . ");
    await Order.find({OrderStatus:"pending"}).then((data)=>{
        console.log(data);
        res.status(200).send(data.map((item)=>{return item.order_Id}));
        // console.log(arr);
        // res.send("Hello")
    }).catch((err)=>{
        res.status(400).json(err);
    })
}


const placeOrder = async (req, res)=>{
    const order  = req.body;
    order.User = req.user.username;
    order.OrderStatus = "pending";
    order.order_Id =await Order.countDocuments().then((len)=>{
        return len+1 ;
    }).catch((err)=>{
        res.send(err);
    })
    
    const newOrder = new Order(order);
    newOrder.save().then((order)=>{
        User.updateOne({user_name:req.user.username},{ $push: { OrderHistory: order.order_Id } }).then((data)=>{
            console.log(data, req.user.username);
        }).catch((err)=>{console.log(err)});    
        res.status(200).send(order);
    }).catch(err=>{
        console.log(err)
        res.status(400).json(err);
    })
}


const removeOrder = async (req,res)=>{
    const order_Id = req.body.order_Id;
    Order.deleteOne({order_Id: order_Id}).then((order)=>{
        if(order.User==req.user){
            res.status(200).send("Order deleted successfully");
        }
        else {
            res.status(404).send("you are not the owner of the order you can not delete this");
        }
    }).catch(err=>{
        res.status(400).json(err);
    })  
}

const updateOrder = async (req,res)=>{

    try{

        const order_Id = req.body.order_Id;
        // console.log(req.body);
    const updates = req.body.updates;
    Order.findOne({order_Id : order_Id}).then((order)=>{
        if(order==null)res.status(404).send("no such order exists ");
        else if(order.User==req.user.username){
            Order.updateOne({order_Id:order_Id },updates).then((order)=>{
                res.status(200).json(order);
            }).catch((err)=>{
                res.status(400).json(err);
            })
        }
        else{
            // console.log(order.User, req.user.username)
            res.status(404).send("you are not the owner of the order you can not update this");
        }
    })
    .catch((err)=>{
            console.log(err);
        })
    }
    catch(err){
        console.log(err)
    }
        
}

const addToCart = async(req, res)=>{
    const user = req.user.username;
    const item_Id = req.body.item_Id;
    const quantity = req.body.quantity; 

            User.updateOne({user_name:user},{$push:{cart:{
                menuItem: item_Id,
                quantity: quantity
            }}}).then((data)=>{
                console.log(data)
                res.status(200).send("Item added to cart")
            }).catch((err)=>{
                console.log(err)
                res.status(400).json(err);})
            
     
}


const markCompleted = async (req,res)=>{
    
    Order.updateOne({order_Id:req.body.order_Id },{OrderStatus:"completed"})
    .then(()=>{
        res.status(200).send("Order Completed")
    })
    .catch(()=>{
        res.status(400).send("Order not completed")
    })
}


const updateCartQuantity = async(req, res) =>{
    try {
        // Find the user by userId and the cart item by menuItem
        const username = req.user.username;
        const menuItem =req.body.menuItem;
        const newQuantity = req.body.newQuantity;
        console.log(req.body);
        const user = await User.findOne({user_name : username});

        if(!user){
           return res.status(404).json({msg : "User not found"});
        }
        const cartItemIndex = user.cart.findIndex(item => item.menuItem === menuItem);
        if (cartItemIndex > -1) {
            // Item exists, update the quantity
            user.cart[cartItemIndex].quantity = newQuantity;
        } else {
            // Item does not exist, add new cart item
            user.cart.push({ menuItem: menuItem, quantity: newQuantity });
        }

        await user.save().then((data)=>{
            res.status(200).json({data});
        }).catch(err=>{
            console.log(err);
        });
        
    } catch (error) {
        console.error('Error updating cart quantity:', error);
        res.status(400).send('Error updating cart quantity');
    }
}


const removeFromCart = async (req, res)=>{
    try {
        // Find the user by userId and the cart item by menuItem
        const username = req.user.username;
        const menuItem =req.body.menuItem;

        console.log(req.body);
        const user = await User.findOne({user_name : username});

        if(!user){
           return res.status(404).json({msg : "User not found"});
        }
        const cartItemIndex = user.cart.findIndex(item => item.menuItem === menuItem);
        if (cartItemIndex > -1) {
            // Item exists, update the quantity
            user.cart.splice(cartItemIndex, 1);
        } else {
            // Item does not exist, add new cart item
            return res.status(404).json({msg : "Item not found in cart"});
        }

        await user.save().then((data)=>{
            res.status(200).json({data});
        }).catch(err=>{
            console.log(err);
        });
        
    } catch (error) {
        console.error('Error updating cart quantity:', error);
        res.status(400).send('Error updating cart quantity');
    }
} 


const GetOrder = async (req, res)=>{
    const order_Id = req.query.order_Id;
    Order.findOne({order_Id:order_Id}).then((order)=>{
        res.status(200).send(order);
    }).catch((err)=>{
        res.status(400).json(err);
    })
}


module.exports= {getAllOrder ,getActiveOrder, placeOrder, updateOrder, removeOrder, updateOrder,markCompleted,addToCart ,updateCartQuantity ,removeFromCart ,GetOrder}


