import React from 'react'
import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks.entities);

  return (
    <ul className="list-group">
      { tasks.map( task => <TaskListItem key={task.id} task={task} /> )}
    </ul>
  )
}
