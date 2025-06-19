import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  //const todos = [
  //  { text: "Learn React", completed: true },
  //  { text: "Apply concept", completed: false },
  //  { text: "Build a Todo App", completed: true },
  //  { text: "Deploy the App", completed: false },
  //];
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: true }
  ])
  const [selectedtab, setTab] = useState('All');

  function addTodo(newTodo) {
    const newTodosList = [...todos, { text: newTodo, completed: false }];
    setTodos(newTodosList);
    saveData(newTodosList);
  }

  function editTodo(index, updatedText) {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
    saveData(updatedTodos);
  }

  function completeTodo(index) {
    let newTodoList = [...todos];
    newTodoList[index].completed = true;
    setTodos(newTodoList);
    saveData(newTodoList);
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    saveData(updatedTodos);
  }

  function saveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')){ return; }
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs selectedtab={selectedtab} setTab={setTab} todos={todos} />
      <TodoList tab={selectedtab} editTodo={editTodo} completeTodo={completeTodo} deleteTodo={deleteTodo} todos={todos} />
      <TodoInput addTodo={addTodo} />
    </>
  )
}

export default App