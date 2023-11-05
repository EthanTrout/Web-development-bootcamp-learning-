const express = require("express");
const morgan = require("morgan")

const app = express();

app.use(morgan("tiny"))

app.use("/dogs",(req,res,next)=>{
    console.log("i love dogs")
    next();
})
const verifyPassword =((req,res,next)=>{
    const {password}=req.query
    if(password === "chiggen"){
        next()
    }
    res.send("need a password")
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("i like wearing womens underwear")
})

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use((req,res)=>{
    res.status(404).send("Not found!")
})
app.listen(3000,()=>{
    console.log("App running on port 3000")
})