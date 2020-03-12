import axios from 'axios';

import {Route} from 'react-router-dom';
import Games from "../containers/Games";

const backUrl = "http://localhost:5000";


export const EndPoints = (values) => {
    const data = {
        name: values["name"],
        enrollment : values['enrollment'],
        password: values['password'],
        role: 'student'
    };

  axios.post(backUrl+'/student', data)
      .then((response) => {
          console.log('response back', response);
      })
      .catch((error) => {
          console.log('ERROR', error);
      });
};


export const Login = (values) => {
    console.log('VLAUES lOGIN', values);
    const data = values;

    console.log('dataLogin', data);

    axios.post(backUrl+'/login', data)
        .then((response) => {
            console.log('response', response);

        })
        .catch((error) => {
            console.log('ERROR', error );
        })
};