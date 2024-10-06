const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

//initialise express
const app = new express();

//connecting to the database
mongoose.connect('mongodb://0.0.0.0:27017/blog_db', 
    {useNewUrlParser:true}
);

//serves static files from public folder
app.use(express.static('public'));

//setting templating engine to ejs
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//set port to listen on
app.listen(4000, () => {
    console.log('App listening on port 4000')
});