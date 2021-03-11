// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Chinoe', organization: "NeG", birth_year: 2005},
        { name: 'HeadKoos', organization: "Bloem", birth_year: 5053},
    ];
    var tagline = "Pass the fortnite card down";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(6969);
console.log('6969 is the magic port');
