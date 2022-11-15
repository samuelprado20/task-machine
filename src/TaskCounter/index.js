import React from "react";
import './TaskCounter.css'
import { TaskContext } from '../TaskContext'

function TaskCounter () {
    const {totalTasks, completedTasks} = React.useContext(TaskContext)
    return (
        <h2 className="TaskCounter">You've completed {completedTasks} out of {totalTasks} tasks</h2>
    )
}

export { TaskCounter }