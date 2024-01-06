const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const projectSchmea = new Schema({
  title: String,
  startDate: Date,
});

const Project = model('Project', projectSchmea);

module.exports = Project;
