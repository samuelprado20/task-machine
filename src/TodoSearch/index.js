import React from "react";
import { TaskContext } from "../TaskContext";
import './TodoSearch.css'

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TaskContext)    
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Search task" 
            value= {searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };