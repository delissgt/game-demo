import React, {Component} from "react";
import {Form, Radio, PageHeader, Button, Col} from 'antd';
import {Redirect} from "react-router-dom";
import {checkTokenValid} from "../../../Helpers/TokenValid";
import {withRouter} from "react-router-dom";
import {studentSize} from "../../../utils/HttpRequests";

class ChangeComponentsSize extends Component{
    state ={
        size: 'default',
    };

    onFinish = (values) => {
        // TODO call to httpRequest for savin changes, before check Token9
        console.log('onFinish Save Changes ', values);
        studentSize(values, this.props['history']);
    };

    onFinishFailed = errorInfo => {
        console.log('onFinishError', errorInfo);
    };

    handleSizeChange = e => {
        this.setState({size: e.target.value});
    };

    checkTokenValid = () => { checkTokenValid() };


    render() {
        if (this.checkTokenValid === false) {
            return <Redirect to = {{pathname: "/login"}} />
        }

        const { size } = this.state;

        return(
            <Col xs={{ span: 11, offset: 6 }} lg={{ span: 11, offset: 6 }}  style={{ paddingTop: '50px' }}>
                <PageHeader title="Cambia el tamaño de los componentes"/>
                <Form
                    // labelCol={{ span: 4, }}
                    // wrapperCol={{ span: 14, }}
                    layout="horizontal"
                    size={size}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item label="Tamaño: " name="size">
                        <Radio.Group value={size} size={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="small">Pequeño</Radio.Button>
                            <Radio.Button value="default">Mediano</Radio.Button>
                            <Radio.Button value="large">Grande</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Guardar Cambios
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        );
    }
}

export default withRouter(ChangeComponentsSize);