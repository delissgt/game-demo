import React, { Component } from "react";
import { Form, PageHeader, Button, Input, Col } from "antd";
import { studentPassword } from "../../../utils/HttpRequests";
import { checkTokenValid } from "../../../Helpers/TokenValid";
import { Redirect, withRouter } from "react-router-dom";
import { passwordRule, passwordAgainRule } from "../../FormRules/Rules";

class ChangePassword extends Component {
    state = {
        size: this.props.componentSize,
    };

    onFinish = values => {
        studentPassword(values, this.props["history"]);
    };

    render() {
        if (checkTokenValid === false) {
            return <Redirect to={{ pathname: "/login" }} />;
        }

        const { componentSize } = this.props;

        return (
            <Col xs={{ span: 11, offset: 6 }} lg={{ span: 11, offset: 6 }} style={{ paddingTop: "50px" }}>
                <PageHeader title="Cambia tu contraseña" />
                <Form onFinish={this.onFinish} size={componentSize} layout={"vertical"}>
                    <Form.Item name="password" label="Nueva contraseña" rules={passwordRule} hasFeedback>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirma la nueva contraseña:"
                        dependencies={["password"]}
                        hasFeedback
                        rules={passwordAgainRule}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" key="submit" onClick={this.handleChangeValues}>
                            Guardar Cambios
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        );
    }
}

export default withRouter(ChangePassword);
