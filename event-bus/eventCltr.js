const eventCltr = {};
const axios = require('axios');
const Event = require('./eventModel');
eventCltr.event = async (req, res) => {
  const body = req.body;
  try {
    const event = new Event(body);
    console.log(event);

    await axios
      .post('http://localhost:5000/events', event)
      .catch((err) => {
        console.log(err.message);
      });

    await axios
      .post('http://localhost:5001/events', event)
      .catch((err) => {
        console.log(err.message);
      });

    await axios
      .post('http://localhost:5002/events', event)
      .catch((err) => {
        console.log(err.message);
      });

    await event.save();
    res.json('Event sent');
  } catch (error) {
    res.status(500).json({error});
  }
};

eventCltr.get = async (req, res) => {
  try {
    const event = await Event.find({});
    // console.log(event, 'here');
    res.json(event);
  } catch (error) {
    res.status(500).json({error});
  }
};
module.exports = eventCltr;
