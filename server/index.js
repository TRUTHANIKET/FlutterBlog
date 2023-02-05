const express=require('express');
const mongoose =require("mongoose");
const route=require("./routes/route")

const app=express()
app.use(route)
app.use(express.json());


const dbURI='mongodb+srv://test:test@cluster0.hmkhrc7.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(5000,()=>{
    console.log(`the server is running on http://localhost:5000`)
}))
.catch((err)=>{console.log(err)})

