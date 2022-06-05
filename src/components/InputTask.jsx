import React, { useState } from "react";
import './InputTask.css'

const InputTask = () => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleShipping = (e) => {
        e.preventDefault()
        const newTask = {
            id: '1234',
            text: input
        }
    }

    return (
    <form id="formTask" onSubmit={handleShipping}>
        <input onChange={handleChange} type="text" className='input-new-task' placeholder='Nueva Tarea' />
    </form>
    )
}

export default InputTask