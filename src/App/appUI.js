import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TaskContext } from '../TaskContext'

function AppUI () {
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TaskContext.Consumer>
                {({error, loading, searchedTasks, markCompleteTask, deleteTask, totalTasks}) => (
                    <TodoList >
                        {/* Loading status */}
                        {error ? <p>There's an error</p> : null}
                        {loading ? <p>Loading...</p> : null}
                        {(!loading && !totalTasks) ? <p>You have no tasks, try adding a new one!</p> : null}
                        
                        {searchedTasks.map(task => (
                        <TodoItem key={task.text} text={task.text} completed={task.completed} onComplete={() => markCompleteTask(task.text)} onDelete={() => deleteTask(task.text)}/>
                        ))}
                    </TodoList>
                )}
            </TaskContext.Consumer>
            <CreateTodoButton />
        </>
    )
}

export { AppUI }