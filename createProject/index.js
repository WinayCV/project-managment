require('dotenv').config();
const express = require('express');

const cors = require('cors');

const {checkSchema} = require('express-validator');

const configDB = require('./configDb');
const projectCltr = require('./project-Cltr');

const app = express();
app.use(express.json());
app.use(cors());
configDB();
const posts = {};

app.get('/projects', projectCltr.list);

app.post('/projects', projectCltr.create);

app.post('/events', projectCltr.event);

app.listen(5000, () => {
  console.log('Listening on 5000');
});
