//importing modules
const express = require("express");
const bodyparser = require("body-parser");

//stores the express module into the app variable
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

//sends index.html
app.get("/bmicalculator", function (req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

//this is used to post the data on the specific route
app.post("/bmicalculator", function (req, res) {
    height = parseFloat(req.body.Height);
    weight = parseFloat(req.body.Weight);
    bmi = weight / (height * height);

    //number to string format
    bmi = bmi.toFixed();
    req_name = req.body.Name;

    //CONDITION FOR BMI
    if (bmi < 19) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<center><h1>You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<center><h1>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<center><h1>You are Overweight!");
    } else {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<center><h1>You are Obese!");
    }
});

//this is used to listen a specific port!
app.listen(3000, function () {
    console.log("port active at 3000");
});