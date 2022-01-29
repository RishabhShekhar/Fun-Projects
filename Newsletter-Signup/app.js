const express = require("express");
const request = require("request");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){

    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;

    console.log(firstName, lastName, email);

    const data = {
        members : [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                  }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us2.api.mailchimp.com/3.0/lists/1e1f8d3827";

    const options = {
        method: "POST",
        auth: "bob:f7e1563f66d010f0d87140af77df182-us2"
    };

    const request = https.request(url, options, function(response){

        if (response.statusCode == 200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

});

// const api_key = "acbdaf3de76719ef91ca2133444f20d0-us2"

// const list_id = "1e1f8d3827"

app.listen(8000, function(){
    console.log("Server is running on port 8000");
});