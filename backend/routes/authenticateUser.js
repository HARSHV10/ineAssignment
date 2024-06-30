const express = require('express');
const bcrypt = require('bcrypt');  
const {authenticateToken} = require('../middleware/authenticateToken');
const User = require('../db/model/userSchema');
const {jwtWebToken} = require('../utils/jwtHelper');


const router = express.Router();


router.post('/login', async (req, res)=>{
    const {username , password} = req.body;
    try{

        if(!username || !password) return res.status(400).json({error: "username or password is empty"});
        const user = await User.findOne({user_name:username});
    /// user not found 
    if(!user) return res.status(404).json({error: "User not found"});
        
        const validPassowrd = await bcrypt.compare(password , user.password);
        if(!validPassowrd){
            return res.status(401).json({error: "Invalid password"});
        }
        

            const tokens = jwtWebToken(user);
            // res.cookie('refreshToken', tokens.refreshToken, {httpOnly: true});
            res.status(200).json(tokens);
        
        }
        catch(err){
            res.status(400).json(err);
        }
})




router.post('/register', async (req, res) => {

    const {username , password} = req.body;
    try{

        const hanshedPassword = await bcrypt.hash(password, 10);
        const user_id = await User.countDocuments({}).then((len)=>{
        return len+1 ;
    }).catch((err)=>{
        res.send(err);
    })
    const isUnique = await User.findOne({user_name : username}).then((data)=>{
        // console.log(data);
        return data;
    })
    // console.log(isUnique)
    if(isUnique){
        console.log("exits")
        res.status(400).send("user already exists");
    }
    else{

        const newUser = new User({
            user_Id : user_id,
            user_name : username,
            password : hanshedPassword
        })
        
        newUser.save().then((user)=>{
            res.status(200).json(user)
        }).catch((err)=>{
            console.log(err);
        })
    }
    }
    catch(err){
       res.status(400).json(err);
    }
})

module.exports = router;
