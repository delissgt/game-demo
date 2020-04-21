import React from 'react';
import {Form, Input, Button, Col} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import './loginForm.css';
import {Login} from "../../utils/HttpRequests";
import buttonSound from "../../assets/button-37.mp3";
import {withRouter} from "react-router-dom";


const loginForm = (props) => {

    const onFinish = values => {
        Login(values, props.history);
    };

    const onFinishFailed = errorInfo => {
      console.log('errorInfo', errorInfo);
    };

    const beep = () => {
        const sound = new Audio();
        sound.src = buttonSound;
        sound.play();
    };

    return (
        <Col xs={{ span: 11, offset: 6 }} lg={{ span: 11, offset: 6 }}  style={{ paddingTop: '50px' }}>
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size={"large"}
        >
            <Form.Item
                name="enrollment"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu matricula!',
                    },
                    {
                        pattern: /^[0-9]+$/,
                        message: 'No es una matricula valida',
                    },
                    ()=> ({
                        validator(rule, value) {
                            if (value != null) {
                                const enrollment = value.toString();
                                if (enrollment.length === 9){
                                    return Promise.resolve();
                                }
                            }
                            return Promise.reject('La matricula debe de ser de 9 digitos');
                        },
                    })
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="matricula"
                    autoFocus={true}
                />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Ingresa tu contraseña!',
                    },
                    () => ({
                        validator(rule, value) {
                            if (typeof(value) !== "undefined") {
                                if (value.length >= 8){
                                    return Promise.resolve();
                                }
                            }
                            return Promise.reject('La contreseña debe ser de minimo 8 caracteres');
                        },
                    }),
                ]}
                hasFeedback
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
                    // onMouseDown={beep}
                >
                    Iniciar sesion
                </Button>
            </Form.Item>
        </Form>
        </Col>
  )
};

export default withRouter(loginForm);