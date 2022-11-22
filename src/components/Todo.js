import React from "react"

const Todo = ({ text, setTodos, todos, todo }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)) // quand on clique sur la trash on réaffiche que les éléments dont l'id ne correspond pas à celui sur lequel on a cliqué
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo
