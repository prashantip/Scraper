var express = require("express");
/*var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
*/

// Require all models
//var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");

});