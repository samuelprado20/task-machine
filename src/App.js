import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const tasks = [
  {text: 'buy onions', completed: false},
  {text: 'call mom', completed: false},
  {text: 'Read work emails', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {tasks.map(task => (
        <TodoItem key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
