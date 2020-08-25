import React from "react";
import { Modal, Button, Form, Input, Space } from "antd";
import { usernameRule, enrollmentRule, passwordRule, passwordAgainRule } from "../../Helpers/FormRules/Rules";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const signUpForm = props => {
    const onFinish = values => {
        props.handleOk(values);
        console.log("registerValues", values);
    };

    return (
        <Space size={50} direction={"vertical"}>
            <Button type="link" onClick={props.showModal} size={"large"}>
                Quiero registrarme!
            </Button>
            <Modal
                visible={props.visible}
                title="Title"
                onCancel={props.handleCancel}
                footer={[
                    <Button key="back" onClick={props.handleCancel}>
                        Cancelar
                    </Button>,
                ]}
            >
                <Form {...formItemLayout} name="register" onFinish={onFinish} size={"large"}>
                    <Form.Item name="name" label="Nombre de usuario" rules={usernameRule}>
                        <Input autoFocus={true} />
                    </Form.Item>

                    <Form.Item name="enrollment" label="Matrícula" rules={enrollmentRule}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="password" label="Contraseña" rules={passwordRule} hasFeedback>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Repite tu contraseña"
                        dependencies={["password"]}
                        hasFeedback
                        rules={passwordAgainRule}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" key="submit">
                            Registrarme
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Space>
    );
};

export default signUpForm;
