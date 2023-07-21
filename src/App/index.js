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
import { ChangeAlertWithStorageListener } from "../ChangeAlert"


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
    synchronizeTasks
  } = useTasks()
  return (
    <>
        <TaskHeader loading={loading}>
            <TaskCounter 
              totalTasks={totalTasks} 
              completedTasks={completedTasks} 
            />
            <TaskSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
            />
        </TaskHeader>

        <TaskList
          error={error}
          loading={loading}
          searchedTasks={searchedTasks}
          totalTasks={totalTasks}
          searchText={searchValue}
          onError={() => <TasksError error={error}/>}
          onLoading={() => <TasksLoading />}
          onEmptyTasks={() => <EmptyTasks />}
          onEmptySearchResults={(searchText) => <p>No results for {searchText}</p>}
          render={task => <TaskItem 
            key={task.text} 
            text={task.text} 
            completed={task.completed} 
            onComplete={() => markCompleteTask(task.text)} 
            onDelete={() => deleteTask(task.text)}
          />}
        >
        
        </TaskList>

        {!!openModal ? 
            (<Modal>
                <TaskForm addTask={addTask} setOpenModal={setOpenModal}/>
            </Modal>) 
            : null
        }
            
        <CreateTaskButton setOpenModal={setOpenModal} />

        <ChangeAlertWithStorageListener  
          synchronize={synchronizeTasks}
        />
    </>
  )
}

export default App;
