import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
    const handleClick = () => {
        setOpenModal(prevState => !prevState)
    }

    return(
        <button className="CreateTodoButton"
        onClick={handleClick}
        >+</button>
    );
}

export { CreateTodoButton };