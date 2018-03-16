const express = require('express');
const cors = require('cors')
const app = express();
const mustache = require("mustache-express");
const bodyparser = require("body-parser");


app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}))

const routes = require('./routes/index.js')

// app.use(cors())
app.use(routes)

const port = process.env.PORT || 4000
app.listen(port, function(){
  console.log('Up and Running')
})
