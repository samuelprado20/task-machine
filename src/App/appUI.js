import React from "react";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";
import { TaskContext } from '../TaskContext'
import { Modal } from '../Modal'
import { TaskForm } from '../TaskForm'
import { TasksLoading } from '../TasksLoading'
import { TasksError } from '../TasksError'
import { EmptyTasks } from '../EmptyTasks'


function AppUI () {
    const {
        error, 
        loading, 
        searchedTasks, 
        markCompleteTask, 
        deleteTask, 
        totalTasks,
        openModal,
        setOpenModal
    } = React.useContext(TaskContext)
    return (
        <>
            <TaskCounter />
            <TaskSearch />
                <TaskList >
                    {/* Loading status */}
                    {error ? <TasksError error={error} /> : null}
                    {loading ? <TasksLoading /> : null}
                    {(!loading && !totalTasks) ? <EmptyTasks /> : null}
                    
                    {searchedTasks.map(task => (
                    <TaskItem key={task.text} text={task.text} completed={task.completed} onComplete={() => markCompleteTask(task.text)} onDelete={() => deleteTask(task.text)}/>
                    ))}
                </TaskList>

                {!!openModal ? 
                    (<Modal>
                        <TaskForm />
                    </Modal>) 
                    : null
                }
                
            <CreateTaskButton setOpenModal={setOpenModal} />
        </>
    )
}

export { AppUI }