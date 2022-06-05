import React, { useState } from "react";
import './Tasks.css'
import Task from './Task';
import InputTask from './InputTask';

const Tasks = () => {
  
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if(task.text.trim()) {
      task.text = task.text.trim()
      
      const newTasks = [task, ...tasks]
      setTasks(newTasks)
    }
  }

  return (
    <>
      <InputTask onSubmit={addTask} />
      <div className="todo-container">
        <ul className="tasks">
          {
            tasks.map((task) =>
              <Task completed={task.completed}> {task.text} </Task>

            )
          }
        </ul>
      </div>
    </>
  )
}

export default Tasks