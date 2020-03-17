import axios from 'axios';

import {Route} from 'react-router-dom';
import Games from "../containers/Games";
import {notification} from "antd";

const backUrl = "http://localhost:5000";


export const SignUp = (values) => {
    const data = {
        name: values["name"],
        enrollment : values['enrollment'],
        password: values['password'],
        role: 'student'
    };

  axios.post(backUrl+'/students', data)
      .then((response) => {
          console.log('response back', response);
      })
      .catch((error) => {
          console.log('ERROR', error);
      });
};


export const Login = (values, signUp) => {
    console.log('VLAUES lOGIN', values);
    const data = values;

    console.log('dataLogin', data);

    axios.post(backUrl+'/login', data)
        .then((response) => {
            console.log('response', response);
            console.log('response', response.status);
            if (response.status === 200 ) {
                // this.setState({signUp: true});
                signUp(true);
            }
        })
        .catch((error) => {
            notification['error']({
                message: 'Hoo no!!',
                description: 'algo sucedio',
            });
            console.log('ERROR', error );
        })
};