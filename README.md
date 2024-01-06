# project-managment

This project is a **Project Management System** built using microservices architecture, providing various functionalities to manage projects and tasks within the system.

## Overview

This application serves as a **Project Management System** allowing users to create, manage, and track projects, tasks, and deadlines efficiently. The system enables users to:

- Create Projects: Users can create projects with titles and start dates, defining the initial details.
- Manage Tasks: Each project can have a list of tasks with due dates, enabling better organization and tracking of work.
- Track Deadlines: Projects and individual tasks within each project have associated due dates to manage deadlines effectively.


## Features

- **Project Creation**: Users can create new projects specifying titles and start dates.
- **Task Management**: Projects have lists of tasks with due dates for better task organization.
- **Deadline Tracking**: Tasks and projects are associated with due dates to track and manage deadlines.

## Architecture

1. **Project Service**
   - Create project and start date.
2. **Task Service**
   - Handles task management functionalities including creation and deadline for task.
3. **Event Bus**
   - Implements an event-driven architecture facilitating communication between microservices.



### Technologies Used

- **Backend**:
  - Node.js with Express.js for server-side logic and RESTful API endpoints.
  - MongoDB for data storage and management.
- **Frontend**:
  - React and interactive user interfaces.
  - Bootstrap for responsive UI components.
- **Communication**:
  - RESTful APIs for inter-service communication.

### Installation

1. Clone the repository: `git clone git@github.com:WinayCV/project-managment.git`.
2. Navigate to the project directory: `cd project-managment`.
3. Install dependencies:Navigate to each folder and `npm install` .
4. Configure environment variables, if any.
5. Start the application: `npm start` or as per your setup.






