const mongoose=require('mongoose');
dotenv.config();
// const url='mongodb+srv://kioken:IcYNTAbGZPwNkeHq@cluster0.0gedaos.mongodb.net/?retryWrites=true&w=majority/assignment'
// const url = process.env.DB_URL
console.log(process.env.JWT_SECRET)
mongoose.connect(process.env.DB_URL).then((msg)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


const db =mongoose.connection;

module.exports=db