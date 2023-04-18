import React, { useState } from 'react'
import '../styles/AddTaskForm.css'

export default function AddTaskForm({ getTodos }) {
  const [todo, setTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()

    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.push({
      id: Date.now(),
      task: todo,
      done: false
    })
    setTodo('')
    localStorage.setItem('todos', JSON.stringify(todos))
    getTodos()
  }

  return (
    <form onSubmit={addTodo}>
        <div className='field'>
            <label htmlFor='task'>Task</label>
            <input 
              type='text' 
              id='task' 
              placeholder='Task...' 
              required 
              value={todo} 
              onChange={e => setTodo(e.target.value)} 
            />
        </div>
        <button type='submit'>Add Task</button>
    </form>
  )
}
