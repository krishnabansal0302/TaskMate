import React from 'react'

import "./ShowTask.css"

export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id)
    setTask(selectedTask)
    
  }
  
  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== id)
    setTasklist(updatedTaskList)
  }

  return (
    <section className="showTask">
  <div className="head">
    <div>
      <span className="title">ToDo</span>
      <span className="count">{tasklist.length}</span>
    </div>
    <button type="reset" className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
  </div>
    <ul>
    { tasklist.map((todo) => (
      <li key={todo.id}>
        
      <p>
        <span className="task">{todo.name}</span>
        <span className="date">{todo.time}</span>
      </p>
      <div>
      <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
      <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
      </div>
    </li>
    ))}
    
    
  </ul>
</section>

  )
}
