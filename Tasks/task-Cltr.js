const axios = require('axios');
const Task = require('./tasksModel');
const taskCltr = {};

taskCltr.create = async (req, res) => {
  const {form} = req.body;
  console.log(form);
  const projectId = req.params.id;
  try {
    const task = await new Task(form);
    task.projectId = projectId;

    await task.save();
    console.log(task);
    await axios.post('http://localhost:5004/events', {
      type: 'TaskCreated',
      payload: task,
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({error});
  }
};

taskCltr.list = async (req, res) => {
  const postId = req.params.id;
  try {
    console.log(postId);
    const tasks = await Task.find({postId: postId});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({error});
  }
};

taskCltr.event = async (req, res) => {
  try {
    console.log('Received Event', req.body.type);
    res.send({});
  } catch (error) {
    res.status(500).json({error});
  }
};

module.exports = taskCltr;
