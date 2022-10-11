import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from 'react';

const defaultTasks = [
  {text: 'buy onions', completed: true},
  {text: 'call mom', completed: false},
  {text: 'Read work emails', completed: false}
]

function App() {
  const [tasks, setTasks] = useState(defaultTasks)
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

  // checking task as completed
  const markCompleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text)
    const newTasks = [...tasks]
    newTasks[taskIndex].completed = true

    setTasks(newTasks)
  }
  
  // deleting task
  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text)
    const newTasks = [...tasks]
    newTasks.splice(taskIndex, 1)

    setTasks(newTasks)
  }

  return (
    <>
      <TodoCounter total={totalTasks} completed={completedTasks}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList >
        {searchedTasks.map(task => (
        <TodoItem key={task.text} text={task.text} completed={task.completed} onComplete={() => markCompleteTask(task.text)} onDelete={() => deleteTask(task.text)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;