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
        accessToken: null,
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

    componentDidMount() {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        console.log('ACCESS::::', accessToken);

        this.setState({accessToken})
    }

    render() {
        const {accessToken} = this.state;

        if (accessToken !== null){
            return (<Redirect to = {{pathname: "/games"}}/>);
        }

        return(
            <div>
                <LoginForm />
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