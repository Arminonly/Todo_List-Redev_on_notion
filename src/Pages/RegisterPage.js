import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockFilled } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { styles } from './styles';

export default function RegisterPage() {
  const navigate = useNavigate();
  const onFinish = values => {
    // console.log('Success:', values);
    navigate('/todopage');
   localStorage.setItem('register', JSON.stringify(values));
   const url = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
 fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
      name: 'Armin',
      username: 'Armin2023',
      email: 'trancefamily2023@example.com',
      isMan: false,
      age: 41,
      ID: '63de85f5494f1da8068a9777'
    }
  });

  };
  // const onRegistry = async () => {
    // const url = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
    // const result = await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: {
    //     name: 'Armin',
    //     username: 'Armin2023',
    //     email: 'trancefamily2023@example.com',
    //     isMan: false,
    //     age: 41,
    //     ID: '63de85f5494f1da8068a9777'
    //   }
    // });
    // const data = await result.json();
    // console.log(data);
  // };
  return (
    <div>
      <Typography.Title style={styles.title} type="success">
        Вход
      </Typography.Title>
      <Form
        style={styles.form}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите логин'
            }
          ]}
        >
          <Input
            style={styles.input}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите пароль'
            }
          ]}
        >
          <Input
            style={styles.input}
            prefix={<LockFilled className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={styles.button}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{' '}
        </Form.Item>
      </Form>
    </div>
  );
}
