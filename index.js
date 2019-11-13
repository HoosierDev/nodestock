const express = require('express')
var exphbs  = require('express-handlebars')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
 // Set handbar routes
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});


app.listen(PORT, () => console.log('Server Listening on port ' + PORT))