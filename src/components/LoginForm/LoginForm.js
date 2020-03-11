import React from 'react';
import { Form, Input, Button, Col } from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import './loginForm.css';


const loginForm = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('errorInfo', errorInfo);
    };

    return (
        <Col xs={{ span: 11, offset: 6 }} lg={{ span: 11, offset: 6 }}  style={{ paddingTop: '50px' }}>
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu nombre de usuario!',
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="nombre de usuario"
                    autoFocus={true}
                />
            </Form.Item>
            <Form.Item
                name="password"
                required={true}
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu contraseña!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Contraseña"
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Iniciar sesion
                </Button>
                {/*Or*/}
                {/*<a href="">register now!</a>*/}
            </Form.Item>
        </Form>
        </Col>
  )
};

export default loginForm;