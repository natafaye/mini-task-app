import React from 'react'

export default function TaskListItem({ task }) {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div>
        <input type="checkbox" />
        &nbsp;{ task.text }&nbsp;
        <span className="badge bg-secondary rounded-pill">{ task.priority }</span>
      </div>
      <button className="btn btn-danger">Delete</button>
    </li>
  )
}
