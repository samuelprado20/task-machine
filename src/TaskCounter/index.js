import React from "react";
import './TaskCounter.css'

function TaskCounter ({totalTasks, completedTasks, loading}) {
    return (
        <h2 className={`TaskCounter ${!!loading && "TaskCounter--loading"}`}>
            You've completed {completedTasks} out of {totalTasks} tasks
        </h2>
    )
}

export { TaskCounter }