const mongoose = require('mongoose');
const configDB = async () => {
  const url = process.env.DB_URL;
  const name = 'project-query';
  try {
    await mongoose.connect(`${url}/${name}`);
    console.log('connected to db', name);
  } catch (e) {
    console.log('error connecting to db');
  }
};

module.exports = configDB;
