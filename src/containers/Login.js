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
        signUp: false,
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
        console.log('handle OK ')

    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    isSignedUp = (singStatus) => {
        this.setState({signUp: singStatus});
    };

    render() {
        if (this.state.signUp) {
            console.log('se cambioSignUp', this.state);
            notification['success']({
               message: 'Hola :)',
               description: 'has iniciado sesion',
            });
            return <Redirect to = {{pathname: "/games"}}/>;
        }

        return(
            <div>
                <LoginForm signUp={this.isSignedUp} />
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