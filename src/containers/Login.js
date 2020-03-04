import React, {Component} from 'react';
import {Form, Button, Input, Row} from 'antd';
import {Route, Link} from 'react-router-dom';
import Games from "./Games";

class Login extends Component {
    state = {
      display: 'block'
    };

    myFunctionClickOk = () => {
        console.log('click boton Login');
    };

    render() {
        return(
            <div>
            <Row style={{ display: this.state.display }}>
                <Form layout="inline">
                    <Form.Item>
                        <Input placeholder="username"/>
                    </Form.Item>
                    <Form.Item>
                        <Input type="password" placeholder="contraseña"/>
                    </Form.Item>
                    <Form.Item>
                        <Link to={'/games'}>
                        <Button
                            type="primary"
                            onClick={this.myFunctionClickOk}
                        >Login</Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Row>
                <Route path="/games" exact component={Games} />
            </div>
        );
    }
}

export default Login;