// DEPENDENCIES
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


// CONFIG EXPRESS
var app = express();
var PORT = process.env.PORT || 3000; 


// GET Requests to show the users json data on the page
app.get('/api/tables', function (req, res) {
    res.json(tableData);
});

app.get('/api/waitlist', function (req, res) {
    res.json(waitlistData);
});


// POST Requests handles data when users submit form
app.post('/api/tables', function (req, res) {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    }
    else {
        waitlistData.push(req.body);
        res.json(false);
    }
});


//HTML PAGE ROUTES
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public-pages/tables.html'));
});

app.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public-pages/reserve.html'));
});

// Default to home page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public-pages/home.html'));
});


// LISTENER
app.listen(PORT, function () {
    console.log(
        'App listening on PORT: ' + PORT);
});