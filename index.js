const express = require('express');
const products = require('./products.json');
const _ = require('lodash');

const app = express();

app.get('/products', function(req, res, next) {
  res.status(200).send(products)
})

app.get('/products/:id', function(req, res, next) {
  let target = _.filter(products, product => {
    return product.id === req.params.id;
  });
  if (target) {
    return res.status(200).send(target);
  } else {
    return res.status(404).send({message: "Item not found!"})
  }
  return res.sendStatus(500);
})

const port = process.env.NODE_ENV === "production" ?
80 : 3000;
app.listen(port, function() {
  console.log('Running on ' + port);
})
