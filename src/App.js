import "./App.css"
import React, { useState, useEffect } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  //States
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  //Use Effect runs once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])
  //Use Effect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  //Save to local storage
  const saveLocalTodos = () => {
    if (todos?.length) {
      // only store the state if products exists and it's length is greater than 0
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }

  const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem("todos")) // becarefull, we use quotes because we want to retrieve the items with a name "todos"
    if (todoLocal) setTodos(todoLocal)
  }

  return (
    <div className="App">
      <header>
        <h1>Ophelia's todo list</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
