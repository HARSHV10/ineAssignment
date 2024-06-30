const mongoose=require('mongoose');

const url='mongodb://127.0.0.1:27017/ineAssignmnet'
mongoose.connect(url).then((msg)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


const db =mongoose.connection;

module.exports=db