const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const querySchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
  startDate: Date,
  projectTitle: String,
  tasks: Array,
});

const Query = model('Query', querySchema);

module.exports = Query;
