import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Button, Col, Form, Input, InputNumber, Row, Select } from 'antd';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
// import { Link } from 'react-router-dom';

export default function Registry() {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!'
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!'
        });

        break;
      default:
    }
  };
  const onFinish = (values,e) => {
    // e.preventDefault();
    const url = 'https://first-node-js-app-r.herokuapp.com/api/users/register';
  fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values)
  })
    
    localStorage.setItem(values, JSON.stringify(values));
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <h1>Registry</h1>
      <Row wrap={false}>
        <Col flex="auto">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            // initialValues={{
            //   residence: ['zhejiang', 'hangzhou', 'xihu'],
            //   prefix: '86'
            // }}
            style={{
              maxWidth: 600
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label="Name"
              tooltip="Enter your name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="username"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Select
                placeholder="Select your gender"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: 'Please input your age!'
                }
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
             <span>&nbsp;</span> Or <Link  to="/">return home</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
