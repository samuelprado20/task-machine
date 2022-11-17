import React from "react";
import './TaskLoading.css'

function TasksLoading () {
    return (
        <div className="LoadingTask-container">
            <p className="LoadingTask-text">Loading Tasks</p>
            
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export { TasksLoading }