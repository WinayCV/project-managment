import React from 'react';

import TaskCreate from './TaskCreate';
import TaskList from './TaskList';

const ProjectList = ({projects, getPost}) => {
  const renderedPosts = projects?.map((project) => {
    return (
      <div
        className="card"
        style={{width: '100%', marginBottom: '20px'}}
        key={project._id}
      >
        <div className="card-header">
          <span>
            Title: {project?.projectTitle} - Start Date:
            {project.startDate?.slice(0, 10)}
          </span>
        </div>
        <div className="card-body" style={{display: 'flex'}}>
          <div style={{flex: 1, marginRight: '10px'}}>
            <TaskList tasks={project.tasks} />
          </div>
          <div style={{flex: 1}}>
            <TaskCreate
              projectId={project.projectId}
              projectStartDate={project.startDate}
              getPost={getPost}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default ProjectList;
