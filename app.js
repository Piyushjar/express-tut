const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express(); 
app.use(express.json());

const router = require('./routes/testRoute')

const DB = 'mongodb://localhost:27017/test';
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then((connection) => {
    // console.log(connection.connections);
    console.log('connection established');
});

app.use('/api/user',router);
app.use('/api',router);


const port=4500;
app.listen(port,()=>{
    console.log(`App listening on ${port}`);
});