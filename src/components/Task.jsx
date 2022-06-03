import React from "react";
import './Task.css'

const Task = ({ completed, children }) => (
	<li className={`task ${completed ? 'completed' : ''}`.trimEnd()}>
		{children}
  </li>
)

export default Task