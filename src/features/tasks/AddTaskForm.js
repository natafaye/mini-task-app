import React from 'react'

export default function AddTaskForm() {
  return (
    <div className="row">
        <input type="text" placeholder="New Task Text"></input>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button>Add Task</button>
    </div>
  )
}
