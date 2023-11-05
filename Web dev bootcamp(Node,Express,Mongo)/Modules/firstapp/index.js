const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("This is the home page")
})
app.get("/cats",(req,res)=>{
    res.send("cats")
})

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} =req.params;
    res.send(`<h1>Browsing the ${subreddit} now</h1>`)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
app.get("*",(req,res)=>{
    res.send("I dont know that path")
})