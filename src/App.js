import React from 'react'
import AddTaskForm from './features/tasks/AddTaskForm'
import TaskDetails from './features/tasks/TaskDetails'
import TaskList from './features/tasks/TaskList'

export default function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <AddTaskForm />
          <TaskList />
        </div>
        <div className="col-lg-4 col-md-6">
          <TaskDetails />
        </div>
      </div>
    </div>
  )
}
