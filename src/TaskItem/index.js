import React from "react";
import { CompleteIcon } from '../TaskIcon/CompleteIcon'
import { DeleteIcon } from '../TaskIcon/DeleteIcon'
import './TaskItem.css'

function TaskItem(props){
    return(
        <li className="TaskItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            
            <p className={`TaskItem-p ${props.completed && 'TaskItem-p--completed'}`}>{props.text}</p>
            
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TaskItem };