import axios from 'axios';
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

    const data = values;

    axios.post(backUrl+'/login', data)
        .then((response) => {
            if (response.status === 200 ) {
                // this.setState({signUp: true});
                signUp(true);
            }
        })
        .catch((error) => {
            let message = "";

            switch (error.response.status) {
                case 400:
                    message = "petición no valida";
                    break;
                case 401:
                    message = "La contraseña es incorrecta >.<";
                    break;
                case  404:
                    message = "El usuario no existe :(";
                    break;
                default:
                    message = "Intentelo mas tarde ...";
                    break;
            }

            notification['error']({
                message: message,
            });

        })
};