const User = require('../db/model/userSchema');

function authenticateStaff(req, res, next){
    console.log(req.user);

    const staff_name = req.user.username;
    User.findOne({user_name:staff_name}).then((staff)=>{
        console.log(staff);
        if(staff.role=="staff"){
            next();
        }
        else {
            res.status(401).send("you are not authorized to perform this action");
        }
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

module.exports = {authenticateStaff};