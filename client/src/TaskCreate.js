import axios from 'axios';
import React, {useState} from 'react';

const TaskCreate = ({projectId, projectStartDate, getPost}) => {
  const [form, setForm] = useState({content: '', dueDate: ''});
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };
  const [errors, setErrors] = useState({});
  const formErrors = {};
  const runValidation = () => {
    if (form.content === '') {
      formErrors.content = 'Content cannot be empty';
    }
    if (form.dueDate === '') {
      formErrors.dueDate = 'Due date cannot be empty';
    } else if (new Date(form.dueDate) < new Date(projectStartDate)) {
      formErrors.dueDate =
        'Due date cannot be less Project start date';
    } else if (new Date(form.dueDate) < new Date()) {
      formErrors.dueDate = 'Due date cannot be less than today';
    }
    setErrors(formErrors);
    return formErrors;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(runValidation()).length === 0) {
      console.log(form);
      try {
        await axios.post(
          `http://localhost:5001/projects/${projectId}/tasks`,
          {
            form,
          }
        );
        getPost();

        setForm({content: '', dueDate: ''});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add task</label>
          <div>
            <input
              name="content"
              type="text"
              value={form.content}
              onChange={handleChange}
              className="form-control"
            />
            {errors.content && (
              <span className="text-danger">{errors.content}</span>
            )}
          </div>
          <label>Due Date</label>
          <div>
            <input
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
              className="form-control"
            />
            {errors.dueDate && (
              <span className="text-danger">{errors.dueDate}</span>
            )}
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TaskCreate;
