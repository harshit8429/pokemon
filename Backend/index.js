const express= require('express');
const mongoose= require('mongoose');

const app= express();
const mongoUri='mongodb://localhost:27017/PokeDatabase';

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
});

mongoose.connection.on('connected',()=>
{
    console.log('Connected to Mongodb..');
});
mongoose.connection.on('error',(err)=>
{
    console.log('Error connecting to Mongodb..');
});
app.listen(4000,()=>
{
    console.log("App is running on PORT 4000");
})