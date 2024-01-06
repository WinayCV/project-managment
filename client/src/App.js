import React, {useEffect, useState} from 'react';
import ProjectCreate from './ProjectCreate';

import axios from 'axios';

import ProjectList from './ProjectList';

const App = () => {
  const [projects, setProjects] = useState([]);
  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5002/projects');

      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPost = () => {
    fetchPosts();
  };
  console.log(projects);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <h1>Project Managment</h1>
      <ProjectCreate getPost={getPost} />
      <hr />
      {projects.length !== 0 && (
        <>
          <h1>Project List</h1>
          <ProjectList projects={projects} getPost={getPost} />
        </>
      )}
    </div>
  );
};
export default App;
