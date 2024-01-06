require('dotenv').config();
const express = require('express');

const cors = require('cors');
const axios = require('axios');
const {checkSchema} = require('express-validator');

const configDB = require('./configDB');
const taskCltr = require('./task-Cltr');
const {config} = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());
configDB();

app.get('/projects/:id/tasks', taskCltr.list);
app.post('/projects/:id/tasks', taskCltr.create);
app.post('/events', taskCltr.event);

app.listen(5001, () => {
  console.log('Listening on 5001');
});
