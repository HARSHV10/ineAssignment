const express = require('express')
const bcrypt = require('bcrypt');
const User = require('../db/model/userSchema');
const {authenticateToken} = require('../middleware/authenticateToken');
const router = express.Router();

router.post('/', async (req, res)=>{
    if(true){
        const {username , password}=req.body;
        const user_id = await User.countDocuments({}).then((len)=>{
            return len+1 ;
        }).catch((err)=>{
            res.send(err);
        })
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStaff = new User({
            user_Id : user_id,
            user_name : username,
            password : hashedPassword,
            role:"staff"
        })
        newStaff.save().then(()=>{
            res.status(200).json(newStaff);
        }).catch(()=>{
            res.status(400).json(err);
        })
    }
    else{
        res.status(401).send("you are not authorized to perform this action");
    }
})

module.exports = router;