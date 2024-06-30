const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // if (req.user) return next(); 
    const auth = req.headers['authorization'];
    // console.log(auth)
    const token = auth && auth.split(' ')[1];
    if (token == null) return res.status(401).json({ error: "No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
}


module.exports = {authenticateToken};