'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sio = require('socket.io-client');

const app = express();
const socket = sio.connect('http://localhost:3000');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
