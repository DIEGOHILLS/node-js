"use strict";

const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    console.log("req.params " ,req.params);
    console.log("req.body " ,req.body);
    console.log("req.url " ,req.url);
    console.log("req.query " ,req.query);
    res.send("Hello, Universe!");
})
    .listen(port, () => {
        console.log(`The Express.js server has started and is listening on port number: ${port}`);
    });

//Line 4 imports the Express.js library into the script. require() is a Node.js function used to import modules.
//Line 5 This line creates an Express application named app. This application will be used to define routes, handle HTTP requests.
//The GET defines a route for handling GET requests to the root URL ("/"). When a GET request is made to the root URL, the callback function (req, res) => {...} will be executed. This function takes two arguments: req (the request object) and res (the response object). In this case, it sends the string "Hello, Universe!" as the response.
//tells the Express application to start listening for incoming connections on the specified port

//NB! data for the query = after the forward slash " / " ?cart=600