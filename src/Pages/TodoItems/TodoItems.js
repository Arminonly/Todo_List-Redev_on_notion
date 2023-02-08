import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './todoItems.module.css';
export default function TodoItems({
  todos,
  complitedTodo,
  editTodo,
  deleteTodo
}) {
  return (
    <>
      {todos && todos.length ? (
        todos.map((todo) => {
          return (
            <div className={s.listItems} key={todo.id}>
              <p>
                <span className={s.span}>
                  <input
                    type="checkbox"
                    onChange={() => complitedTodo(todo.id)}
                  />
                </span>
              </p>
              &nbsp;
              <p>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    border: '0px',
                    color: 'white',
                    fontSize: '24px'
                  }}
                  className={todo.complited ? 'done' : ''}
                  type="text"
                  value={todo.text}
                  onChange={(e) => editTodo(e.target.value, todo.id)}
                />
              </p>
              &nbsp;&nbsp;
              <p>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </p>
            </div>
          );
        })
      ) : (
        <div className={s.no_todos}>
          <h2>Задач нет</h2>
        </div>
      )}
    </>
  );
}
