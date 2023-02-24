import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserOutlined, LockFilled } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { styles } from './styles';

export default function LoginPage() {
  // const navigate = useNavigate();
  const onFinish = values => {
    const url = 'https://first-node-js-app-r.herokuapp.com/api/auth/login';
  fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmNlcmVAYXByaWwuYml6IiwiSUQiOiI2M2Y2ODE3MzJjMzFmZDRmOTM4MTg3NDEiLCJpYXQiOjE2NzcwOTk1ODZ9.06nLFDosrH3NHuYamqxSA6xQo1dnMveIlQvgDr3Q-Tg'
      },
      body: JSON.stringify(values)
    });
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmNlcmVAYXByaWwuYml6IiwiSUQiOiI2M2Y2ODE3MzJjMzFmZDRmOTM4MTg3NDEiLCJpYXQiOjE2NzcwOTk1ODZ9.06nLFDosrH3NHuYamqxSA6xQo1dnMveIlQvgDr3Q-Tg'

    localStorage.setItem('token', token);
    localStorage.setItem('login', JSON.stringify(values));
    console.log('Success:', values);
    // navigate('/todopage');
    
    
  };

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
          name="email"
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
            placeholder="email"
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
          Or{' '}
          <Link style={styles.a} to="/registry">
            register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
