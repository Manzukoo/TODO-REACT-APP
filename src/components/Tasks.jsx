import React from "react";
import './Tasks.css'
import Task from './Task';
import InputTask from './InputTask';

const Tasks = () => (
  <>
    <InputTask />
    <div className="todo-container">
      <ul className="tasks">
        <Task
          completed={true}>Prueba1</Task>
        <Task
          completed={false}>Prueba2</Task>
        <Task
          completed={false}>Prueba3</Task>
      </ul>
    </div>
  </>
)

export default Tasks