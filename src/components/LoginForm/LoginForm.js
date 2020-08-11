import React from "react";
import { Form, Input, Button, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./loginForm.css";
import { Login } from "../../utils/HttpRequests";
import buttonSound from "../../assets/button-37.mp3";
import { withRouter } from "react-router-dom";
import { enrollmentRule, passwordRule } from "../FormRules/Rules";

const loginForm = props => {
    const onFinish = values => {
        Login(values, props.history);
    };

    const onFinishFailed = errorInfo => {
        console.log("errorInfo", errorInfo);
    };

    const beep = () => {
        const sound = new Audio();
        sound.src = buttonSound;
        sound.play();
    };

    return (
        <Col xs={{ span: 11, offset: 6 }} lg={{ span: 11, offset: 6 }} style={{ paddingTop: "50px" }}>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size={"large"}
            >
                <Form.Item name="enrollment" rules={enrollmentRule}>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="matricula"
                        autoFocus={true}
                    />
                </Form.Item>

                <Form.Item name="password" rules={passwordRule} hasFeedback>
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
    );
};

export default withRouter(loginForm);
