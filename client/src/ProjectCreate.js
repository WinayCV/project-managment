import axios from 'axios';
import React, {useState} from 'react';

const ProjectCreate = ({getPost}) => {
  const [form, setForm] = useState({title: '', startDate: ''});
  const [errors, setErrors] = useState({});
  const formErrors = {};
  const runValidation = () => {
    if (form.title === '') {
      formErrors.title = 'Title cannot be empty';
    }
    if (form.startDate === '') {
      formErrors.startDate = 'Start date cannot be empty';
    } else if (new Date(form.startDate) < new Date()) {
      formErrors.startDate = 'Start date cannot be less than today';
    }
    setErrors(formErrors);
    return formErrors;
  };
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(runValidation()).length === 0) {
      try {
        await axios.post('http://localhost:5000/projects', {
          form,
        });
        getPost();
        setForm({title: '', startDate: ''});
        setErrors({});
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('error', errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="col-sm-2 col-form-label">
            Project Title
          </label>
          <div className="col-sm-4">
            <input
              value={form.title}
              name="title"
              onChange={handleChange}
              className="form-control"
              type="text"
            />
            {errors.title && (
              <span className="text-danger">{errors.title}</span>
            )}
          </div>

          <label className="col-sm-2 col-form-label">
            Start Date
          </label>
          <div className="col-sm-4">
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="form-control"
            />
            {errors.startDate && (
              <span className="text-danger">{errors.startDate}</span>
            )}
          </div>
        </div>

        <div className=" offset-sm-1">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreate;
