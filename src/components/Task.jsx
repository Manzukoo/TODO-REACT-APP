import React from "react";
import './Task.css'
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Task = ({ id, completeTask, deleteTask, completed, children }) => (
	<li className={`task ${completed ? 'completed' : ''}`.trimEnd()}>
		<p className="text-of-task">
			{children}
		</p>
		<div onClick={() => deleteTask(id)} className="delete-task">
			<AiOutlineCloseSquare className="delete-task" />
		</div>
		<div onClick={() => completeTask(id)} className="completeTask"></div>
	</li>
)

export default Task