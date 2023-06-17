const express= require('express');
const mongoose= require('mongoose');
const cors=require('cors');

const app= express();

app.use(cors());
app.use(express.json());


const adminPassword = encodeURIComponent('Harshit123##');
const mongoUri= `mongodb+srv://shinigami08:${adminPassword}@cluster0.9ob8dfv.mongodb.net/?retryWrites=true&w=majority`;

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
// app.get('/hello', (req, res) => {
//     console.log("fuck you");
//     res.send({"sas":""});
// });
app.listen(4000,()=>
{
    console.log("App is running on PORT 4000");
})

