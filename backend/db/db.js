const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(process.env.DB_URL).then((msg)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


const db =mongoose.connection;

module.exports=db