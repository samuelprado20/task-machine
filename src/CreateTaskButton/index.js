import React from "react";
import './CreateTaskButton.css'

function CreateTaskButton({setOpenModal}){
    const handleClick = () => {
        setOpenModal(prevState => !prevState)
    }

    return(
        <button className="CreateTaskButton"
        onClick={handleClick}
        >+</button>
    );
}

export { CreateTaskButton };