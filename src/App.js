
import './App.css';
import react, { useState, useEffect } from 'react';
import Form from './Components/Form'
import ToDoList from './Components/TodoList';
import { shallowEqual } from '@babel/types';
function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [FilteredTodos, setfilteredTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    GetLocalTodos();
  }, [])
  useEffect(() => {
    console.log(FilteredTodos)
    Filterhandler();
    saveLocalTodos();
  }, [todos, status])

 
  const Filterhandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "incompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setfilteredTodos(todos);
    }

  }
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
  }
  const GetLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
    let todolocal=  JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
    console.log(todolocal);
    setTodos(todolocal);
    }
  }
  return (
    <div>
      <header>
        To-Do List
      </header>
      <Form setErrorMessage={setErrorMessage} errorMessage={errorMessage} setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <ToDoList setTodos={setTodos} todos={todos} filteredtodos={FilteredTodos} />
    </div>
  );
}

export default App;
