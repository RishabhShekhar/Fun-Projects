const express = require("express");
const request = require("request");
const bodyparser = require("body-parser");

app = express();

app.listen(8000, function(){
    console.log("Server is running on port 8000")
})