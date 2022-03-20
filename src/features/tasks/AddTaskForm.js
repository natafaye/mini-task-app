import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './taskSlice'

export default function AddTaskForm() {
  const dispatch = useDispatch();
const initialFormData = {
  text: "",
  priority: 1
}

  // Local State: form data
  const [formData, setFormData] = useState(initialFormData);
  const handleFormDataChange = (event) => setFormData(
    { ...formData, [event.target.name]: event.target.value },
  );

  function handleAddTask() {
    //call action creator

    const newTask = {
      text: formData.text,
      priority: formData.priority
    }

    dispatch(addTask(newTask))
    
  }

  return (
    <div className="row g-3 mb-3">
      <div className='col col-4'>
        <input className="form-control" name="text" onChange={handleFormDataChange} type="text" placeholder="New Task Text" value={formData.text}/>
      </div>
      
      <div className="col col-3">
        <select className="form-control" name="priority" onChange={handleFormDataChange} value={formData.priority}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="col col-3">
        <button onClick={handleAddTask} className='btn btn-outline-secondary'>Add Task</button>
      </div>
    </div>
  )
}
