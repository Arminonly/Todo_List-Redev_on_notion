import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

export const SuccessPage = () => {
  return (
    <Result
      status="success"
      title="Successfully signed up!"
      subTitle="Congadulations! You're just created new account!!!"
      extra={[
        <Button type="primary" key="console">
          <Link to="/"> Back to Login</Link>
        </Button>
      ]}
    />
  );
};
