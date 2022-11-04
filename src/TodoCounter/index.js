import React from "react";
import './TodoCounter.css'
import { TaskContext } from '../TaskContext'

function TodoCounter () {
    const {totalTasks, completedTasks} = React.useContext(TaskContext)
    return (
        <h2 className="TodoCounter">You've completed {completedTasks} out of {totalTasks} tasks</h2>
    )
}

export { TodoCounter }