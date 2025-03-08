import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import backgroundImage from './image1.jpg'; 
import "./Login_css.css";
import { useNavigate } from 'react-router-dom';
// import { Color } from 'antd/es/color-picker';
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values: ', values);
    navigate('/home'); // ✅ Correct path for navigation
  };
  

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0',
      }}
       className='check'
       
    >
      <h1 style={{color:'white'}}>Welcome user</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          padding: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#edebe875',
          width: '55vh',
        }}
       
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox ><span style={{ color: 'blue', fontWeight:'500' }}>Remember me</span></Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
