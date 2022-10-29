import React, {useState} from 'react';
import Form from './components/Form';

import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText]=useState("")
  const [todo, setTodo]=useState([])
  return (
    <div className="App">
      <Form setInputText={setInputText} setTodo={setTodo} todo={todo} inputText={inputText}/>
      
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
