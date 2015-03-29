var express = require('express')
  , app = express();

var statements = [
  'All of the factors to this equation are irrational : I want a new worksheet!',
  'watisthisIdon\'teven.',
  "I'm having fun in the welcome thread.",
  "BOMB THE PLANET WITH ALL THE FOOD HAHAHAAHAH\nIM IMAGINING PURPLE CARROTS\nIN MASS QUANTITIES RAINING DOWN ON THE ASCHEN\nWHO ARE LIKE\n... Whut.\nAND ALL THE TERRANS WHO ARE LIKE\n....Whut\nthen half the poor terrans who clamour for food.",
  "We're not roosters.  We're writers _for_ roosters."
];

app.get('/', function(req, res) {
  res.header('Content-Type', 'text/html');
  res.send( '<pre>' + statements[ Math.floor(Math.random()*statements.length) ] + '</pre>');
});

app.listen(4007);
