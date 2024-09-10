"use strict";

const routeResponseMap = {
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};
//routeResponseMap: This is an object that maps different URL routes to their respective HTML responses.

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        console.log("URL IS: ", req.url); //Only if you want the information to be displayed in terminal
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
            //setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            res.end("<h1>Page does not exist</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);

//If-else statement => Checks if the requested URL matches any route in the routeResponseMap.
//If it does, it sends the corresponding HTML response; otherwise, it sends a default "Welcome" message.