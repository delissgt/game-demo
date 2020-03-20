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
          if ( response.status === 201 ){
              notification['success']({
                  message: "Se ha creado la cuenta :)",
                  description: "Ahora puedes iniciar sesion",
              });
          }
      })
      .catch((error) => {
          let message = "Algo malo paso :(";

          if (error.response) {
              switch (error.response.status) {
                  case 400:
                      message = "Los datos no son validos ";
                      break;
                  case 409:
                      message = "Esta matricula ya ha sido registrada";
                      break;
                  case 500:
                      message = "Error Interno";
                      break;
                  case 502:
                      message = "Intentalo mas tarde...";
                      break;
                  default :
                      message = "Asegurate de estar conectado a internet.";
                      break;
              }
          }

          notification['error']({
              message: message,
          });
      });
};


export const Login = (values, isLogged) => {

    const data = values;

    axios.post(backUrl+'/login', data)
        .then((response) => {
            if (response.status === 200 ) {
                isLogged(true);
            }
        })
        .catch((error) => {
            let message = "Algo malo paso :(";

            if (error.response) {
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
                    case 502:
                        message = "Intentalo mas tarde ...";
                        break;
                    default:
                        message = "Asegurate de estar conectado a internet.";
                        break;
                }
            }

            notification['error']({
                message: message,
            });

        })
};