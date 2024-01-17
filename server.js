const express=require('express');

const app=express();

const PORT=3500;

app.get('/',(req,res)=>{
    res.send('Express APP..');
})

app.listen(PORT,()=>{
    console.log('Server is running on port 3500');
})