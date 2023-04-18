import React, { useEffect, useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import './styles/App.css'

export default function App() {
  const [todos, setTodos] = useState([])

  const getTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(todos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className='container'>
      <h1>My Todos</h1>
      <AddTaskForm getTodos={getTodos} />
      <TaskList todos={todos} getTodos={getTodos} />
    </div>
  )
}
