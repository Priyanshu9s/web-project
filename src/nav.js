const express=require("express");
const nav=express();




nav.get("/",(req,res)=>{
    res.send("home page");
});
nav.get("/about",(req,res)=>{
    res.send("about");
});
nav.get("/contact",(req,res)=>{
    res.send("contact");
});

nav.listen(8000,()=>{
    console.log("here")
});