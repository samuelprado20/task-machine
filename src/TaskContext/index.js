import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext()

function TaskProvider (props) {
    const {item: tasks, saveTasks, loading, error} = useLocalStorage('TASKS_V1', [])

    const [searchValue, setSearchValue] = useState('')

    const [openModal, setOpenModal] = useState(false)

    const completedTasks = tasks.filter(task => !!task.completed).length
    const totalTasks = tasks.length

    // Task filtering on search
    let searchedTasks = []
    if(!searchValue.length >= 1) {
        searchedTasks = tasks
    } else {
        searchedTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return taskText.includes(searchText)
        })
    }

    // marking task as completed
    const markCompleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text)
        const newTasks = [...tasks]
        newTasks[taskIndex].completed = true

        saveTasks(newTasks)
    }

    // deleting task
    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text)
        const newTasks = [...tasks]
        newTasks.splice(taskIndex, 1)

        saveTasks(newTasks)
    }

    // adding task
    const addTask = (text) => {
        const newTasks = [...tasks]
        newTasks.push({
            completed: false,
            text,
        })

        saveTasks(newTasks)
    }

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            markCompleteTask,
            addTask,
            deleteTask,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TaskContext.Provider>

    )
} 

export {TaskContext, TaskProvider}