import React from 'react'
import '../styles/Task.css'

export default function Task({ todo, getTodos }) {
    const toggleDoneTodo = () => {
        let todos = JSON.parse(localStorage.getItem('todos')) || []
        todos.map(t => {
            if (t.id == todo.id) t.done = !t.done
            return t
        })
        localStorage.setItem('todos', JSON.stringify(todos))
        getTodos()
    }

    const deleteTodo = () => {
        let todos = JSON.parse(localStorage.getItem('todos')) || []
        let t = todos.find((t, i) => t.id == todo.id)
        let todoIndex = todos.indexOf(t)
        todos.splice(todoIndex, 1)

        localStorage.setItem('todos', JSON.stringify(todos))
        getTodos()
    }

    return (
        <li className='todo'>
            <h2 className={todo.done ? 'done' : ''}>{todo.task}</h2>
            <div className='actions'>
                <button className='complete' onClick={toggleDoneTodo}>Complete</button>
                <button className='delete' onClick={deleteTodo}>Delete</button>
            </div>
        </li>
    )
}
