import axios from 'axios';
import {notification} from "antd";
import React from "react";
import {checkTokenValid} from "../Helpers/TokenValid";
import jwt_decode from 'jwt-decode';

const backUrl = "http://localhost:5000/v1";


export const SignUp = (values) => {
    const data = {
        name: values["name"],
        enrollment : values['enrollment'],
        password: values['password'],
        role: 'student',
        size_component: 'default'
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


export const Login = (values, history) => {

    const data = values;

    axios.post(backUrl+'/login', data)
        .then((response) => {
            // console.log('login', response.data);  // access and refresh token
            // console.log('login', response.data['access_token']);  // access and refresh token
            if (response.status === 200 ) {

                localStorage.setItem('access_token', response.data['access_token']);
                localStorage.setItem('refresh_token', response.data['refresh_token']);
                // history.pushState(url:  "/games")
                console.log('Se pudo loguear Dibujar Games');
                history.push("/games");
                // return <Redirect to = {{pathname: "/games"}}/>;
            }
        })
        .catch((error) => {
            console.log('ERROR lOGIN', error);
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


export const studentPassword = (values, history) => {
    const data = {
        password: values['password']
    };

    const accessToken = localStorage.getItem('access_token');

    console.log('DATA PASS', data);

    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const enrollment = decoded['identity'];
        console.log('tipi enro', typeof(enrollment));
        console.log('DECODED', decoded);

        axios.patch(backUrl+'/students/'+ enrollment.toString(), data, { headers: {"Authorization" : `Bearer ${accessToken}` } })
            .then((response) => {
                console.log('response Ok', response);
                if (response.status === 204) {
                    notification['success']({
                        message: "La contraseña se ha actualizado :)"
                    })
                }

            })
            .catch((error) => {
                console.log('Error', error);
                let message = "Algo malo paso :(";

                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            message = "Uppsss! Tu sesion ha expirado";
                            history.push("/login");
                            break;
                        case 400:
                            message = "No se pudo modificar la contraseña";
                            break;
                        case 502:
                            message = "Peticion mal formada :(";
                            break;
                        default:
                            message = "Asegurate de estar conectado a internet";
                            break;
                    }
                }
                notification['error']({
                    message: message,
                });
            // todo catch 401 when token has expired or invalid
            })
    }

};