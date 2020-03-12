import React, {Component} from 'react';
// import {Form, Button, Input, Row} from 'antd';
import {Route} from 'react-router-dom';
import Games from "./Games";
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm'

import { EndPoints }  from "../utils/HttpRequests";

class Login extends Component {
    state = {
        visible: false,
        loading: false,
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


    render() {
        return(
            <div>
                <LoginForm>
                    <Route path="/games" exact component={Games} />
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