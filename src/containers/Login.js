import React, {Component} from 'react';
import {Form, Button, Input} from 'antd';
import {Link} from 'react-router-dom';

class Login extends Component {
    state= {
        pageGame: 'something'
    };

    myFunctionClickOk = () => {
        this.setState({pageGame: '/pagigna/juego/1'});
    };

    render() {
        return(
            <div>
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
            </div>
        );
    }
}

export default Login;