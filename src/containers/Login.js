import React, {Component} from 'react';
// import {Form, Button, Input, Row} from 'antd';
import {Redirect} from 'react-router-dom';
import Games from "./Games";
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm'

import { EndPoints }  from "../utils/HttpRequests";
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

        EndPoints(values);

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
               message: 'Logueado',
               description: 'se ha iniciado sesion wiii!!',
            });
            return <Redirect to = {{pathname: "/games"}}/>;
        }



        return(
            <div>
                <LoginForm signUp={this.isSignedUp}>
                    {/*<Route path="/games" exact component={Games} />*/}
                </LoginForm>
                <SignUpForm
                    visible={this.state.visible}
                    showModal={this.showModal}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    loading={this.state.loading}
                />
                {/*<Route path="/games" exact component={Games} />*/}
            </div>
        );
    }
}

export default Login;