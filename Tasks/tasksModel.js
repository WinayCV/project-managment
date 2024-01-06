const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const taskSchema = new Schema({
  dueDate: Date,
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
  content: {
    type: String,
  },
});

const Task = model('Task', taskSchema);

module.exports = Task;
