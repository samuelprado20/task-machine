import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const handleClick = msg => {
        alert(msg)
    }
    return(
        <button className="CreateTodoButton"
        onClick={() => handleClick("Modal goes here")}
        >+</button>
    );
}

export { CreateTodoButton };