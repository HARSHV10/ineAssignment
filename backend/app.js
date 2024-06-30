const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const {dirname, join} = require('path');
const fileURLToPath = require('url').fileURLToPath;
const db = require('./db/db');
const userRouter = require('./routes/user');
const auth = require('./routes/authenticateUser');
const menu = require('./routes/menu')
const order = require('./routes/orders')
const addStaff = require('./routes/addStaff')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.CORS_ORIGIN||'*',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(cookieParser());

/// calling the routes 
app.use(express.json());

app.use('/users',userRouter)
app.use('/auth',auth)
app.use("/menu",menu)
app.use('/order',order);
app.use('/addStaff',addStaff);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})