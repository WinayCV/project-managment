require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const configDB = require('./configDb');
const queryCltr = require('./query-Cltr');
const Query = require('./queryModel');
const app = express();
app.use(express.json());
app.use(cors());
configDB();

app.get('/projects', queryCltr.list);

app.post('/events', queryCltr.event);

const handleEvent = async (type, payload) => {
  try {
    const {_id, title, startDate} = payload;

    if (type === 'ProjectCreated') {
      const existingQuery = await Query.findOne({projectId: _id});

      if (!existingQuery) {
        const newQuery = new Query({
          projectId: _id,
          projectTitle: title,
          startDate: startDate,
        });
        await newQuery.save();
      }
    }

    if (type === 'TaskCreated') {
      const existingQuery = await Query.findOne({
        projectId: payload.projectId,
      });

      if (existingQuery) {
        // Check if the comment already exists in the comments array
        const existingComment = existingQuery.tasks.find(
          (task) =>
            task.id === _id && task.content === payload.content
        );

        if (!existingComment) {
          await Query.findOneAndUpdate(
            {projectId: payload.projectId},
            {
              $push: {
                tasks: {
                  id: _id,
                  content: payload.content,
                  dueDate: payload.dueDate,
                },
              },
            },
            {new: true, runValidators: true}
          );
        } else {
          console.log(
            'Task already exists for postId:',
            payload.projectId
          );
        }
      } else {
        console.log(
          'Project not found for postId:',
          payload.projectId
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
};

app.listen(5002, async () => {
  console.log('Listening on 5002');
  try {
    const res = await axios.get('http://localhost:5004/events');

    for (let event of res.data) {
      console.log('Processing event:', event);

      handleEvent(event.type, event.payload);
    }
  } catch (error) {
    console.log(error.message);
  }
});
