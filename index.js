const express = require('express');
const products = require('./products.json');
const _ = require('lodash');
const pets = require('./pets.json');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/products', function(req, res, next) {
  res.status(200).send(products)
})

app.get('/products/:id', function(req, res, next) {
  let target = _.find(products, product => {
    return product.id === req.params.id;
  });
  if (target) {
    return res.status(200).send(target);
  } else {
    return res.status(404).send({message: "Item not found!"})
  }
  return res.sendStatus(500);
})

app.get('/pets', function(req, res, next) {
  res.status(200).send(pets)
})

app.get('/pets/:id', function(req, res, next) {
  let target = _.find(pets, pet => {
    return pet.id === req.params.id;
  });
  if (target) {
    return res.status(200).send(target);
  } else {
    return res.status(404).send({message: "Pet not found!"})
  }
  return res.sendStatus(500);
})

const port = process.env.NODE_ENV === "production" ?
80 : 3000;
app.listen(port, function() {
  console.log('Running on ' + port);
})
