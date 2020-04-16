require('newrelic');
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000;

//app.use(express.json()); //remove for post route
app.use(express.static(__dirname + '/../public'));

app.post('/api/review', (req, res) => {
  const passAlongUrl = 'http://3.22.188.226:3001/api/review';
  req.pipe(request(passAlongUrl)).pipe(res);
});

app.listen(PORT, console.log(`Proxy server listening on ${PORT}`));