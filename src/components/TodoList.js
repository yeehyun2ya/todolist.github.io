import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';


const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div className="custom-todo-list"style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {todos.map(todo => (
                <div key={todo.id} className="card" style={{ width: '30rem', marginBottom: '10px' }}>
                    <ul className="list-group list-group-flush">
                        <TodoItem todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TodoList;