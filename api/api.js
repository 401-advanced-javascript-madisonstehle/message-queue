'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sio = require('socket.io-client');

const app = express();
const socket = sio.connect('http://localhost:3001');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('HELLO I AM THE HOME PAGE');
});

app.post('/delivery/:vendor/:orderID', (req, res, next) => {
  let order = {
    vendor: req.params.vendor,
    orderID: req.params.orderID
  }

  socket.emit('delivered', order);
  // res.status(200);
  res.send('Sent order to queue!')
})

app.listen(3001, () => {
  console.log('API is up and running on port 3001!')
});
