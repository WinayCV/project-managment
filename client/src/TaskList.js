import React from 'react';

const TaskList = ({tasks}) => {
  console.log(tasks);
  const renderedTasks = tasks?.map((task) => (
    <tr key={task.id}>
      <td>{task.content}</td>
      <td>{task.dueDate.slice(0, 10)}</td>
    </tr>
  ));

  return (
    tasks?.length !== 0 && (
      <div>
        <h4>Task List</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>{renderedTasks}</tbody>
        </table>
      </div>
    )
  );
};

export default TaskList;
