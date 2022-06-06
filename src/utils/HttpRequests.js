import axios from "axios";
import { notification } from "antd";
import * as config from "../config";
import jwt_decode from "jwt-decode";

const urlBackend = config.urlBackend;

export const SignUp = values => {
    console.log("VALUES REGISTER");
    const data = {
        name: values["name"],
        enrollment: values["enrollment"],
        password: values["password"],
        role: "student",
        size_component: "default",
        game_register: "{}",
    };

    axios
        .post(urlBackend + "/students", data)
        .then(response => {
            if (response.status === 201) {
                notification["success"]({
                    message: "Se ha creado la cuenta :)",
                    description: "Ahora puedes iniciar sesion",
                });
            }
        })
        .catch(error => {
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
                    default:
                        message = "Asegurate de estar conectado a internet.";
                        break;
                }
            }

            notification["error"]({
                message: message,
            });
        });
};

export const Login = (values, history) => {
    const data = values;

    axios
        .post(urlBackend + "/login", data)
        .then(response => {
            // console.log('login', response.data);  // access and refresh token
            // console.log('login', response.data['access_token']);  // access and refresh token
            if (response.status === 200) {
                localStorage.setItem("access_token", response.data["access_token"]);
                localStorage.setItem("refresh_token", response.data["refresh_token"]);

                const decodeSize = jwt_decode(response.data["access_token"]);
                const size = decodeSize["user_claims"]["size_content"];
                localStorage.setItem("size", size);

                // history.pushState(url:  "/games")
                console.log("Se pudo loguear Dibujar Games");
                history.push("/games");
                // return <Redirect to = {{pathname: "/games"}}/>;
            }
        })
        .catch(error => {
            console.log("ERROR lOGIN", error);
            let message = "Algo malo paso :(";

            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        message = "petición no valida";
                        break;
                    case 401:
                        message = "La contraseña es incorrecta >.<";
                        break;
                    case 404:
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

            notification["error"]({
                message: message,
            });
        });
};

export const studentPassword = (values, history) => {
    const data = {
        password: values["password"],
    };

    const accessToken = localStorage.getItem("access_token");

    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const enrollment = decoded["identity"];

        axios
            .patch(urlBackend + "/students/" + enrollment.toString(), data, {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then(response => {
                console.log("response Ok", response);
                if (response.status === 204) {
                    notification["success"]({
                        message: "La contraseña se ha actualizado :)",
                    });
                }
            })
            .catch(error => {
                let message = "Algo malo paso :(";

                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            const refreshToken = localStorage.getItem("refresh_token");
                            axios
                                .post(
                                    urlBackend + "/refresh-token",
                                    {},
                                    { headers: { Authorization: `Bearer ${refreshToken}` } }
                                )
                                .then(response => {
                                    localStorage.setItem("access_token", response.data["access_token"]);
                                    studentPassword(data, history);
                                })
                                .catch(error => {
                                    message = "Uppsss! Tu sesion ha expirado";
                                    history.push("/login");
                                    notification["error"]({
                                        message: message,
                                    });
                                });
                            break;
                        case 400:
                            message = "No se pudo modificar la contraseña";
                            notification["error"]({
                                message: message,
                            });
                            break;
                        case 502:
                            message = "Peticion mal formada :(";
                            notification["error"]({
                                message: message,
                            });
                            break;
                        default:
                            message = "Asegurate de estar conectado a internet";
                            notification["error"]({
                                message: message,
                            });
                            break;
                    }
                }

                // todo catch 401 when token has expired or invalid
            });
    }
};

export const studentSize = (values, history, callback) => {
    const data = values;
    const accessToken = localStorage.getItem("access_token");
    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const enrollment = decoded["identity"];
        axios
            .patch(urlBackend + "/students/" + enrollment.toString(), data, {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then(response => {
                if (response.status === 204) {
                    localStorage.setItem("size", values["size"]);
                    notification["success"]({
                        message: "Se han actualizado los cambios",
                    });

                    callback();
                }
            })
            .catch(error => {
                let message = "Algo malo paso :(";

                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            const refreshToken = localStorage.getItem("refresh_token");
                            axios
                                .post(
                                    urlBackend + "/refresh-token",
                                    {},
                                    { headers: { Authorization: `Bearer ${refreshToken}` } }
                                )
                                .then(response => {
                                    localStorage.setItem("access_token", response.data["access_token"]);
                                    studentSize(data, history);
                                })
                                .catch(error => {
                                    message = "Uppsss! Tu sesion ha expirado";
                                    history.push("/login");
                                    notification["error"]({
                                        message: message,
                                    });
                                });
                            break;
                        case 400:
                            message = "No pudo realizar los cambios";
                            notification["error"]({
                                message: message,
                            });
                            break;
                        case 502:
                            message = "Peticion mal formada :(";
                            notification["error"]({
                                message: message,
                            });
                            break;
                        default:
                            message = "Asegurate de estar conectado a internet";
                            notification["error"]({
                                message: message,
                            });
                            break;
                    }
                }
            });
    }
};
