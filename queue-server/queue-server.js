'use strict';

const sio = require('socket.io')(3001);

let queue = {
  flowerShop: [],
  candyShop: []
};

sio.on('connection', (socket) => {
  console.log(`Message Queue has connected to socket ${socket.id}`);

  socket.on('received', (payload) => {

  });

  socket.on('getAll', (payload) => {

  });

  socket.on('subscribe', (payload) => {

  });

  socket.on('delivered', (payload) => {

  });
  
});