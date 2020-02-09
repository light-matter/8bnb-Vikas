const express = require('express')
const $ = require("jquery");
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express()
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));

app.get('/data/0', (req, res) => {
  axios.get('http://54.153.109.129:3000/data/1')
    .then((innerRes) => {
      res.json(innerRes.data);
    })
    .catch((err) => { console.log(err) })
});

app.get('/homes', (req, res) => {
  axios.get('http://54.183.237.192:3001/homes')
    .then((innerRes) => {
      res.json(innerRes.data);
    })
    .catch((err) => { console.log(err) })
});


app.get('/reservations/', (req, res) => {
  const { spaceId } = req.query;
  axios.get('http://ec2-18-221-158-53.us-east-2.compute.amazonaws.com/reservations/' + spaceId)
    .then((innerRes) => {
      res.json(innerRes.data);
    })
    .catch((err) => { console.log(err) })
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))