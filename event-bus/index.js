const express = require('express');

const eventCltr = require('./eventCltr');
const configDB = require('./configDb');

const app = express();
app.use(express.json());
configDB();

app.post('/events', eventCltr.event);

app.get('/events', eventCltr.get);
app.listen(5004, () => {
  console.log('Listening on 5004');
});
