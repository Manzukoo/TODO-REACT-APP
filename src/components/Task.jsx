import React from "react";
import './Task.css'

const Task = ({ completed, children }) => (
	<li className={`task ${completed ? 'completed' : ''}`.trimEnd()}>
		<p className="text-of-task">
			{children}
		</p>
		<div className="delete-task">
			Eliminar
		</div>
  </li>
)

export default Task