const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.get("/", function(req, res){
    const today = new Date();
    var currentDay = today.getDay();

    if (currentDay == 0 || currentDay == 6){
        res.sendFile(__dirname+"/index.html");
    }
    else{
        res.sendFile(__dirname+"/index.html");
    }
})

app,listen(8000, function(){
    console.log("Server is running on port 8000")
})