import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import './taskForm.css'

function TaskForm() {
    const [newTaskValue, setNewTaskValue] = useState('')
    const {addTask, setOpenModal} = useContext(TaskContext)

    const onChange = (event) => {
        setNewTaskValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSumbmit = (event) => { 
        event.preventDefault()

        addTask(newTaskValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSumbmit}>
            <label>New task:</label>
            <textarea placeholder="Task description" value={newTaskValue} onChange={onChange}/>
            <div className="TaskForm-buttonContainer">
                <button onClick={onCancel} type="button" className="TaskForm-button TaskForm-button--cancel">Cancel</button>
                <button type="submit" className="TaskForm-button TaskForm-button--add">Add task</button>
            </div>
        </form>
    )
}

export { TaskForm }