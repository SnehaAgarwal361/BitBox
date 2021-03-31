require('dotenv').config();

const express=require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors=require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true, useFindAndModify: false }).then(()=>{
    console.log("DB connected");
});


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


const authRoutes=require("./routes/auth");
const router = require('./routes/auth');

app.use("/api",authRoutes);

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});