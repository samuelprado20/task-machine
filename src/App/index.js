import './App.css';
import { AppUI } from './appUI'
import { useState } from 'react';

// const defaultTasks = [
//   {text: 'buy onions', completed: true},
//   {text: 'call mom', completed: false},
//   {text: 'Read work emails', completed: false}
// ]

// localstorage custom hook
function useLocalStorage (itemName, initialValue) {
  //checking local storage
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem
  
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)
  //save in local storage
  const saveTasks = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }
  
  return [item, saveTasks]
}

function App() {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', [])

  const [searchValue, setSearchValue] = useState('')

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

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTasks={searchedTasks}
      markCompleteTask={markCompleteTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
