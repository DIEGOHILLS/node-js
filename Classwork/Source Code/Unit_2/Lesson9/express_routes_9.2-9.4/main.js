"use strict";

const port = 3000,
    express = require("express"),
    app = express();

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    console.log("Query string is " , req.query)
    res.send("Welcome");
});

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//Params uses colons : and query uses ?
//run - /items/carrots