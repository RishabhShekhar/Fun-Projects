const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var items = ["Buy Food", "Eat Food", "Cook Food"];

var workitems = [];

app.get("/", function(req, res){
    const today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay:day, newitems:items, buttontitle:"list"});

});

app.post("/", function(req, res){

    item = req.body.item;

    if(req.body.button == "work"){
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

})

app.get("/work", function(req, res){

    res.render("list", {kindOfDay:"Work List", newitems:workitems ,buttontitle:"work"});

})

app.get("/about", function(req,res){
    
    res.render("about")

})

app.listen(8000, function(){
    console.log("Server is running on port 8000");
});
