import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './taskSlice';

export default function TaskListItem({ task }) {
  const dispatch = useDispatch;

  const onDeleteClicked = () => {
    dispatch(deleteTask(task.id));
  }

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div>
        <input type="checkbox" />
        &nbsp;{ task.text }&nbsp;
        <span className="badge bg-secondary rounded-pill">{ task.priority }</span>
      </div>
      <button class="btn btn-danger" onClick={onDeleteClicked} >Delete</button>
    </li>
  )
}
