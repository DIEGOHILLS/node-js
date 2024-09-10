"use strict";

const port = 3000,
    express = require("express"),
    app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.post("/", (req, res) => {
    console.log("request body " ,req.body);
    console.log("request query " ,req.query);
    res.send("POST Successful!");
});

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//Test in git-bash to run the the body and query request
//NB!! run post in git-bash
//curl --data "username=Jon&password=secret" http://localhost:3000
