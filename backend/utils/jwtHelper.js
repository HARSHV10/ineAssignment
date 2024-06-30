const jwt = require('jsonwebtoken');

function jwtWebToken({user_name , password}){
    // const {user_name , password}= payload;
    try{

        console.log(user_name, password)
        const payload = {
            "username":user_name,
            "password":password
        }
        
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '5d'});
        return (accessToken)
    }
    catch(err){
        console.log(err)
    }

}

module.exports = {jwtWebToken};