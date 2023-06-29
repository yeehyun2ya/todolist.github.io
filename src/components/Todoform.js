import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo({
        id: Date.now(),
        text: text.trim()
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="할일을 등록하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;