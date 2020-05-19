'use strict';


const handleDelivered = (payload) => {
  console.log('handling delivered event...');
}

const getAllMessages = (payload) => {
  console.log('getting all messages');
}

module.exports = {
  handleDelivered,
  getAllMessages
}