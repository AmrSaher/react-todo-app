import React from 'react'
import Task from './Task'
import '../styles/TaskList.css'

export default function TaskList({ todos, getTodos }) {
  return (
    <ul className='todos'>
      {todos.map(todo => (
        <Task key={todo.id} todo={todo} getTodos={getTodos} />
      ))}
    </ul>
  )
}
