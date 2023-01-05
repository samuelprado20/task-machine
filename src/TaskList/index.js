import React from "react";
import './TaskList.css'

function TaskList(props){
    const renderFunc = props.children || props.render
    return(
        <section className="TaskList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props.totalTasks) && props.onEmptyTasks()}
            
            {(!!props.totalTasks && !props.searchedTasks.length) && props.onEmptySearchResults(props.searchText)}

            <ul>
                {props.searchedTasks.map(renderFunc)}
            </ul>
        </section>
    );
}

export { TaskList };