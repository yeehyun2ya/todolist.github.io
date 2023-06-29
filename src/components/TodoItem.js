import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);
  const [showFullText, setShowFullText] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    toggleTodo(todo.id);
  };

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const renderTodoText = () => {
    if (showFullText || todo.text.length <= 20) {
      return todo.text;
    } else {
      return todo.text.slice(0, 20) + '...';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        style={{ marginRight: '10px' }}
      />
      <div style={{ flexGrow: 1 }}>
        <span
          style={{
            fontSize: '22px',
            marginRight: '10px',
            textDecoration: isChecked ? 'line-through' : 'none'
          }}
        >
          {renderTodoText()}
        </span>
        {todo.text.length > 20 && !showFullText && (
          <>
            <button onClick={toggleText} style={{ fontSize: '12px', marginRight: '5px' }}>
              더보기
            </button>
            <span style={{ width: '5px' }}></span>
          </>
        )}
      </div>
      <button onClick={() => deleteTodo(todo.id)} style={{ fontSize: '12px' }}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;