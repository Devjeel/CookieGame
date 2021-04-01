const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// The Global Score 
let global_score = 0;

// connect to the db
// mongoose.connect("mongodb://127.0.0.1:27017/cookie", {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', express.static(path.join(__dirname, 'public')))

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Click POST Route to save to mongo 
app.post('/clicked', (req, res) => {
    console.log("click recieved");

    // For now we can just use the global variable to store 
    global_score += 1;
});

// get request for clicks count
app.get('/clicks', (req, res) => {
  res.send(global_score);
});

app.listen(8080, () => {
    console.log('listening on 8080');
});