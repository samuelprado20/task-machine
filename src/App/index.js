import './App.css';
import React from 'react';
import { useTasks} from './useTasks'
import { Modal } from '../Modal'
import { TaskForm } from '../TaskForm'
import { TasksLoading } from '../TasksLoading'
import { TasksError } from '../TasksError'
import { EmptyTasks } from '../EmptyTasks'
import { TaskHeader } from "../TaskHeader";
import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TaskList } from "../TaskList";
import { TaskItem } from "../TaskItem";
import { CreateTaskButton } from "../CreateTaskButton";


function App() {
  const {
    error, 
    loading, 
    searchedTasks, 
    markCompleteTask, 
    deleteTask, 
    totalTasks,
    openModal,
    setOpenModal,
    completedTasks,
    searchValue, 
    setSearchValue,
    addTask,
  } = useTasks()
  return (
    <>
        <TaskHeader>
            <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks}/>
            <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </TaskHeader>
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
                <TaskForm addTask={addTask} setOpenModal={setOpenModal}/>
            </Modal>) 
            : null
        }
            
        <CreateTaskButton setOpenModal={setOpenModal} />
    </>
  )
}

export default App;
