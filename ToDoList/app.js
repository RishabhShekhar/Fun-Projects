const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const today = new Date();
    var currentDay = today.getDay();
    var day = "";
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
    
    res.render("list", {kindOfDay:weekday[currentDay]});

});

app.listen(8000, function(){
    console.log("Server is running on port 8000");
});