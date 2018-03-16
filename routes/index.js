const express = require('express')
const router = express.Router()
const API_KEY = require('../config')
const fetch = require("node-fetch");

const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=${API_KEY}`

router.get('/', function(req, res){
  res.json({
    endpoints: {
      fetchTicketmaster: "/fetchTicketmaster fetches the ticketmaster data"
    }
  })
})

router.get('/fetchTicketmaster', function(req, res){
  fetch(url)
    .then(response => {
      response.json().then(json => {
        let j = json._embedded.events
        res.json(j)
      })
    })
    .catch(error => {
      console.log(error);
    });
})

module.exports = router;
