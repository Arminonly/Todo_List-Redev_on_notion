import React from 'react';
import { motion } from 'framer-motion';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './todoItems.module.css';
export default function TodoItems({todos,editTodo,deleteTodo,completedTodo}) {


  return (
    <>
      {todos && todos.length ? (
        todos.map((todo) => {
          return (
            <motion.div
              initial={{ x: -500, scale:0,opacity:0 }}
              animate={{ x: 0,scale:1,opacity:1 }}
              transition={{
                delay: 0.2
              }}
              whileHover={{ background: 'lime' }}
              className={s.listItems}
              key={todo.id}
             >
              <p>
                <span className={s.span}>
                  <input
                    type="checkbox"
                    onChange={()=>completedTodo(todo.id)}
                  />
                </span>
              </p>
              &nbsp;
              <p>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    border: '0px',
                    fontSize: '24px',
                    outline: 'none'
                  }}
                  className={todo.complited ? 'done' : ''}
                  type="text"
                  value={todo.text}
                  onChange={(e)=>editTodo(e.target.value,todo.id)}
                />
              </p>
              &nbsp;&nbsp;
              <p>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={()=>deleteTodo(todo.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </p>
            </motion.div>
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
