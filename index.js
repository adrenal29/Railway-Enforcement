const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Portals/landing.html');
})

app.use(express.static('/Portals'));

console.log("Server is listening")
const port=process.env.PORT || 4000
app.listen(port)