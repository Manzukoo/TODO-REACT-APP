import React from "react";
import './InputTask.css'

const InputTask = () => (
    <form id="formTask">
        <input type="text" className='input-new-task' placeholder='Nueva Tarea' />
    </form>
)

export default InputTask