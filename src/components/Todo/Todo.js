import React from 'react';

const Todo = ({ todo, index, handleDeleteTodo }) => {
  return (
    <div key={todo.id} className="todo" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'px', flexWrap:'wrap' }}>
      <span className="todo-text" style={{ flex: '1' }}>
        {index + 1}. {todo.text}
      </span>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className="todo-delete"
        style={{ backgroundColor: '#E7F5FF', borderRadius:'5px', cursor: 'pointer', gap:'100rem' }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
