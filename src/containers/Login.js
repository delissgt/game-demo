import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm'

import { SignUp }  from "../utils/HttpRequests";
import {notification} from "antd";

class Login extends Component {
    state = {
        visible: false,
        loading: false,
        isLogged: false,
    };

    showModal = () => {
      this.setState({visible: true});
    };

    handleOk = (values) => {

        SignUp(values);

        this.setState({visible: false});
      // this.setState({ loading: true });
        // setTimeout(()=>{
        //    this.setState({loading: false, visible: false});
        // }, 3000);
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    isLogged = (loggedStatus) => {
        this.setState({isLogged: loggedStatus});
    };

    render() {
        console.log('Login props', this.props);
        console.log('changed isLogged state', this.state);

        if (this.state.isLogged) {
            notification['success']({
               message: 'Hola :)',
               description: 'has iniciado sesion',
            });
            return (<Redirect to = {{pathname: "/games"}}/>);
        }

        return(
            <div>
                <LoginForm isLogged={this.isLogged} />
                <SignUpForm
                    visible={this.state.visible}
                    showModal={this.showModal}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    loading={this.state.loading}
                />

            </div>
        );
    }
}

export default Login;