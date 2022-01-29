const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

var items = ["Buy Food", "Eat Food", "Cook Food"];

app.get("/", function(req, res){
    const today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay:day, newitems:items});

});

app.post("/", function(req, res){

    item = req.body.item;

    items.push(item);

    res.redirect("/");

})

app.listen(8000, function(){
    console.log("Server is running on port 8000");
});