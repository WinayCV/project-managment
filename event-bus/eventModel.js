const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const eventSchema = new Schema({
  type: String,
  payload: Object,
});

const Event = model('Event', eventSchema);

module.exports = Event;
