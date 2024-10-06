const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

//initialise express
const app = new express();

//connecting to the database
mongoose.connect('mongodb://0.0.0.0:27017/blog_db',
    { useNewUrlParser: true }
);

//middleware functions
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

//setting templating engine to ejs
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', { blogposts });
});

app.get('/about', (req, res) => {
    res.render('about');
});

//view post by id
app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogpost
    });
});

//create new post
app.get('/posts/new', (req, res) => {
    res.render('create')
});

//stores post in database
//redirects us to home page
app.post('/posts/store', async (req, res) => {
    await BlogPost.create(req.body);
    res.redirect('/');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//set port to listen on
app.listen(4000, () => {
    console.log('App listening on port 4000')
});