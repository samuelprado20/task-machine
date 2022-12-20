import React from "react";
import './TaskCounter.css'

function TaskCounter ({totalTasks, completedTasks}) {
    return (
        <h2 className="TaskCounter">You've completed {completedTasks} out of {totalTasks} tasks</h2>
    )
}

export { TaskCounter }