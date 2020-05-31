import React, {Component} from "react";
import {Form, Radio, PageHeader, Button, Col} from 'antd';
import {studentSize} from "../../../utils/HttpRequests";
import {checkTokenValid} from "../../../Helpers/TokenValid";
import {Redirect, withRouter} from "react-router-dom";

class ChangeComponentsSize extends Component{
    state ={
        size: this.props.componentSize,
    };

    onFinish = (values) => {
        studentSize(values, this.props['history'], this.props.callback);

    };

    onFinishFailed = errorInfo => {
        console.log('onFinishError', errorInfo);
    };

    handleSizeChange = e => {
        this.setState({size: e.target.value});
    };

    checkTokenValid = () => { checkTokenValid() };


    componentDidMount() {
        window.addEventListener("keyup", this.validateKey, false)
    }

    validateKey = (event) => {
        let e;
        event.key ? e=event.key : e = event.toString();
        switch (e) {
            case "1":
                console.log('BOTON 1', e);
                break;
            case "2":
                console.log('BOTON 2', e);
                break;
            case "3":
                console.log('BOTON 3', e);
                break;
            default:
                console.log('OTRO BOTON', e);
                break;
        }
    };


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
                            <br/>
                            <br/>
                            <Radio.Button value="default">Mediano</Radio.Button>
                                <br/>
                                <br/>
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