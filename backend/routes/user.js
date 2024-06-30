const express = require('express');
const bcrypt = require('bcrypt');  
const {authenticateToken} = require('../middleware/authenticateToken');
const User = require('../db/model/userSchema');
const router = express.Router();

router.get('/getAllUsers',async (req,res)=>{

    console.log("searching for data in the database . . . ");
    const data = await User.find({});
    console.log(data);
    res.send(data);

})

/// get the logged in user 
router.get('/getUser_information',authenticateToken,(req,res)=>{
    // {
    //     role: 'user',
    //     _id: new ObjectId('667f1546c66858a355123387'),
    //     user_Id: 1,
    //     user_name: 'testing1',
    //     password: '$2b$10$hx8s2yD0rZJocz/WQbxLPe0I3pTBWk3p0he2aUjTjmKFPOSj5LDKu',  
    //     __v: 0,
    //     cart: [ 1 ]
    //   },
    
    User.findOne({user_name:req.user.username}).then((user)=>{
        const {role ,user_name , cart,OrderHistory}=user;
        res.status(200).json({"role":role ,"user_name":user_name , "cart":cart,"OrderHistory":OrderHistory})
    }).catch((err)=>{
        res.status(400).json(err);
    })
})


module.exports = router;


