const express = require("express");
const request = require("request");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.listen(8000, function(){
    console.log("Server is running on port 8000");
});