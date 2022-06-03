import React from "react";
import './Task.css'

const Task = ({ completed, children }) => (
	<li className={`task ${completed ? 'completed' : ''}`.trimEnd()}>
		{children}
		<div className="delete-task">
			Eliminar
		</div>
  </li>
)

export default Task