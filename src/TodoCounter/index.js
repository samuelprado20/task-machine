import React from "react";
import './TodoCounter.css'

function TodoCounter ({total, completed}) {
    return (
        <h2 className="TodoCounter">You've completed {completed} out of {total} tasks</h2>
    )
}

export { TodoCounter }