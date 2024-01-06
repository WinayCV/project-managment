const Query = require('./queryModel');

const queryCltr = {};

queryCltr.event = async (req, res) => {
  const {type, payload} = req.body;
  console.log(req.body);
  try {
    const {_id, title, startDate} = payload;
    const query = new Query();
    if (type === 'ProjectCreated') {
      query.projectId = _id;
      query.projectTitle = title;
      query.startDate = startDate;

      console.log(query);
      await query.save();
    }

    if (type === 'TaskCreated') {
      console.log(payload);
      const query = await Query.findOneAndUpdate(
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
        {
          new: true,
          runValidators: true,
        }
      );
      if (query) {
        console.log(query, 'query');
      }
    }

    res.send({});
  } catch (error) {
    res.status(500).json({error, mes: 'here'});
  }
};
queryCltr.list = async (req, res) => {
  try {
    const query = await Query.find();
    console.log(query);
    res.json(query);
  } catch (error) {
    res.status(500).json({error, mes: 'here'});
  }
};
module.exports = queryCltr;
