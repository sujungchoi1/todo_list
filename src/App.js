import React, { useState } from 'react'
import './App.css';
import Input from './components/Input'
import TodoList from './components/TodoList'
// import Todo from './components/Todo'
// import FruitForm from './components/FruitForm'

function App() {

  const [todos, setTodos] = useState([
    // {
    //   body: "Create todo list",
    //   completed: false
    // },
    // {
    //   body: "Feed the cat",
    //   completed: true
    // },
    // {
    //   body: "Walk the dog",
    //   completed: false
    // }
  ]);
  
  return (
    <div className="App">
      <header>
        <h1>Suj's To-Do List!</h1>
        <p style={{"font-size":"48px"}}>
        &#128516; &#128525; &#128522;
        </p>
      </header>

      <Input todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <Todo todos={todos} setTodos={setTodos} /> */}
    </div>
  );
}

export default App;
