const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// The Global Score 
let global_score = 0;

// connect to the db
// mongoose.connect("mongodb://127.0.0.1:27017/cookie", {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs'); 

// serve the homepage
app.get('/', (req, res) => {
  res.render("index", {score: global_score});
});

// @route POST: Route for increment count action
app.post('/clicked', (req, res) => {

    // For now we can just use the global variable to store 
    global_score += 1;
});

// @route GET: cookies count in json format
app.get('/clicks', (req, res) => {
  res.json({score: global_score});
});

app.listen(8080, () => {
    console.log('listening on 8080');
});