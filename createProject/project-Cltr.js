const axios = require('axios');
const Project = require('./projectModel');
const projectCltr = {};

projectCltr.create = async (req, res) => {
  const {form} = req.body;
  console.log(form);
  try {
    const project = await new Project(form);
    await project.save();
    await axios.post('http://localhost:5004/events', {
      payload: project,
      type: 'ProjectCreated',
    });

    res.json({message: 'Project created'});
  } catch (error) {
    res.status(500).json({error});
  }
};
projectCltr.list = async (req, res) => {
  try {
    const project = await Project.find();
    console.log(project);
    res.json({project});
  } catch (error) {
    res.status(500).json({error});
  }
};
projectCltr.event = async (req, res) => {
  try {
    console.log('Received Event', req.body.type);
    res.send({});
  } catch (error) {
    res.status(500).json({error});
  }
};

module.exports = projectCltr;
