import React, { useState } from 'react';
import {
  contentStyle,
  inputStyle,
  layoutStyle,
  mainSpaceStyle
} from './styles/todopageStyles';
import { Button, Layout, Space, Input } from 'antd';
import ExitButton from './ExitButton';
import TodoItems from '../TodoItems/TodoItems';
const { Content } = Layout;

const Todopage = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  //* Добавление задачи
  const addTodo = e => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const newTodo = {
      text: value,
      id: Date.now(),
      complited: false
    };
    setTodos([...todos, newTodo]);
    setValue('');
    console.log(newTodo);
  };
  //*удаление задачи
  const deleteTodo = id => {
    const deleteItem = [...todos].filter(todo => todo.id !== id);
    setTodos(deleteItem);
  };
  //*редактировать задачу
  const editTodo = (text, id) => {
    const editText = [...todos];
    editText.map(todo => {
      if (todo.id === id) {
        todo.text = text;
      }
    });
    setTodos(editText);
  };
  //*задача ввыполнена
  const completedTodo = id => {
    const doneTodo = [...todos];
    doneTodo.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited;
      }
      return todo;
    });
    setTodos(doneTodo);
  };

  return (
    <div>
      <Space direction="vertical" style={mainSpaceStyle}>
        <Layout style={layoutStyle}>
          <Space direction="vertical">
            <Content style={contentStyle}>
              <Space direction="vertical">
                <ExitButton />
                <Space direction="horizontal">
                  <form onSubmit={addTodo}>
                    <Input
                      style={inputStyle}
                      type="text"
                      bordered="true"
                      placeholder="Add todo"
                      size="large"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />
                    <Button type="primary" size="large" htmlType="submit">
                      Add Todo
                    </Button>
                  </form>
                </Space>
              </Space>
            </Content>
          </Space>
          <div style={{ margin: '10px auto' }}>
            <TodoItems
          
              todos={todos}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completedTodo={completedTodo}
            />
          </div>
        </Layout>
      </Space>
    </div>
  );
};

export default Todopage;
