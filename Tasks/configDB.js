const mongoose = require('mongoose');
const configDB = async () => {
  const url =
    'mongodb+srv://winaycv:VeLG648oCVCFCVa5@cluster0.o9umnpw.mongodb.net';
  const name = 'task';

  try {
    await mongoose.connect(`${url}/${name}`);
    console.log('connected to db', name);
  } catch (e) {
    console.log('error connecting to db');
  }
};

module.exports = configDB;
