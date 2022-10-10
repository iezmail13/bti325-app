/*************************************************************************
* BTI325– Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy. No part * of this assignment has been copied manually or electronically from any
other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Ismail Mohamed Student ID: 107859217 Date: 10/09/22
*
* Your app’s URL (from Cyclic) : ______________________________________________
*
*************************************************************************/ 

var data_service = require ('data-service.js');

import * as data_service from '/data-service.js';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/data/employees.json"));})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/data/departments.json"));})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/data/managers.json"));})
        

// http://localhost:8080
var express = require("express"); // Include express.js module
var app = express();

var path = require("path"); // include module path to use __dirname, and function path.join()

var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static('public'));

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req, res){
    let resText = "Hello World. <br> This is my homepage. <br> Enjoy... <br>";
    resText += "<a href = './about/html'> Go to About page </a> <br>";
    resText += "<a href = 'home.html'> Go to Home File page </a> <br>"; 
    resText += " Happy Coding! "; 
   
});

 // setup another route to listen on /about
app.get("/about", function (req, res){
    var resText = "<h3> This is from route /About. </h3> <br>";
    resText += "<a href='/about'> About </a>";
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

/* app.get("/contact", function (req, res){
    var resText = "<h3> This is from route /About. </h3> <br>";
    resText += "<a href='/'> Home </a>";
    res.send(resText);
});

*/

// setup another route to listen on /aboutFile
app.get("/aboutfile", function(req, res){
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);