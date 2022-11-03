import './App.css';
import { AppUI } from './appUI'
import React from 'react';
import {TaskProvider} from '../TaskContext'


function App() {
  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export default App;
