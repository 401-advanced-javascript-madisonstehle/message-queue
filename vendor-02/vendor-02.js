'use strict';

const sio = require('socket.io-client');
const socket = sio.connect('http://localhost:3001');

const handleDelivered = require('../vendorModule.js').handleDelivered;
const getAllMessages = require('../vendorModule.js').getAllMessages;


socket.emit('subscribe', 'candyShop');

socket.on('delivered', handleDelivered);

socket.emit('getAll', getAllMessages);