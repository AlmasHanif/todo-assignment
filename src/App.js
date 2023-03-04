import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, input])
      setInput("")
    }
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>
        Todo App
      </h1>
      <input type="text" placeholder='enter your todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((val, ind) => (
          <><div key={ind}>{val}<button onClick={() => deleteTodo(val)}>Delete todo</button></div></>
        ))}
      </div>
    </div>
  );
}

export default App;
