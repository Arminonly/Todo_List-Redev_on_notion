import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from 'antd';
import { LoginOutlined } from '@ant-design/icons';


export default function ExitButton() {
    return (
        <Link to={'/'}>
        <Button
          style={{ marginTop: '15px' }}
          size="large"
          icon={<LoginOutlined />}
          danger
          type="primary"
        >
          Exit
        </Button>
      </Link>
    )
}
