import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducers/TodoReducer';
import './App.css';
import Todo from './components/todo';
import todoList from './components/todoList'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setTodo('')
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='item' value={newTodo} onChange={handleChange} placeholder='Todo'/><br/>
        <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo})} type='submit'>Add Todo</button>
        <todoList dispatch={dispatch}/>
        <button onClick={() => dispatch({type: 'CLEAR', payload:newTodo})}>Clear Todo</button>
      </form>
    </div>
  );
}

export default App;
