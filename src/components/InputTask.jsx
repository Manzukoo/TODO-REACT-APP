import React, { useState } from "react";
import './InputTask.css'
import {v4 as uuidv4} from 'uuid'

const InputTask = () => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleShipping = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
    }

    return (
    <form id="formTask" onSubmit={handleShipping}>
        <input onChange={handleChange} type="text" className='input-new-task' placeholder='Nueva Tarea' />
    </form>
    )
}

export default InputTask