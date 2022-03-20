import React from 'react'

export default function TaskListItem({ task }) {
  return (
    <li className="list-group-item">
        <p>Show the tasks' text and priority and a checkbox and a delete button as a Bootstrap list group item</p>
        <a href="https://getbootstrap.com/docs/5.1/components/list-group/">Bootstrap Reference</a>
        <button class="btn btn-danger">Delete</button>
    </li>
  )
}
