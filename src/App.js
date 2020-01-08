import React, { useState, useEffect } from 'react';
import './App.css'

const TodoFrom = ({ addTodo }) => {
    const [value, setValue] = useState("")
    const handelSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input
                    className="input"
                    input="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}
// const removeTodo = index =>{
//     const newTodos = [...todos]
// }
const App = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'build realy cool todo app',
            isCompleted: false
        }
    ])
    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    const addTodo = text => {
        const newTodo = [...todos, { text }]
        setTodos(newTodo)
    }
    const completedTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    }
    const Todo = ({ todo, index, completedTodo }) => <div className="todo" style={
        { textDecoration: todo.isCompleted ? "line-through" : '' }
    }>
        {todo.text}
        <div>
            <button onClick={() => completedTodo(index)}>Compilite</button>
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    </div>
    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completedTodo={completedTodo}
                    />
                ))}
                <TodoFrom addTodo={addTodo} />
            </div>
        </div>
    )
}
export default App