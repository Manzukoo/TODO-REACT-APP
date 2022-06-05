import React from "react";
import './Tasks.css'
import Task from './Task';

const Tasks = () => (
  <>
    <ul className="tasks">
      <Task
        completed={true}>Prueba1</Task>
      <Task
        completed={false}>Prueba2</Task>
      <Task
        completed={false}>Prueba3</Task>
    </ul>
  </>
)

export default Tasks