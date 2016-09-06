const express = require('express');
const { adjectives, sexes, crimes, victims, places }  = require('./data');

const app = express();

const getRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomCrime = () => {
  return `${getRandom(adjectives)} ${getRandom(sexes)} ${getRandom(crimes)} ${getRandom(victims)} ${getRandom(places)}`;
};

app.get('/crime', (req, res) => res.json(getRandomCrime()));

app.listen(app.get('port') || 5000, () => 
  console.log('API is listening at port 5000')
);
