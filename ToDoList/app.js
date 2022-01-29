const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const date = require(__dirname+"/date.js")

app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const items = ["Buy Food", "Eat Food", "Cook Food"];

const workitems = [];

app.get("/", function(req, res){
    
    const day = date.getDay();
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
