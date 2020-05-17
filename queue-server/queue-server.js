'use strict';

const sio = require('socket.io')(3000);

let queue = {};

sio.on('connection', (socket) => {
  console.log(`queue has connected to ${socket.id}`);
})