import React from 'react';
import axios from "axios";
import {notification} from "antd";
import {SmileOutlined} from "@ant-design/icons";
// import * as config from "../config";
import jwt_decode from 'jwt-decode';


// const urlBackend = config.urlBackend;
const urlGame = "http://localhost:5001/v1";


export const AttributeGame = (values) => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken !== null) {
        const data = {
            game_section: 'attribute',
            game_level : values.game_level,
            user_answer: values.user_answer
        };

        console.log('DATA', data);

        axios.put(urlGame+'/score/answer', data, { headers: {"Authorization" : `Bearer ${accessToken}` } })
            .then((response)=> {
                console.log('response', response.data['score']);
                console.log('response tipeee', typeof (response.data['score']));
                console.log('RESPONSE OK', response.status);
                notification.open({
                    message:  "Wooo !!! obtubiste " + response.data['score'] + " aciertos",
                    icon: <SmileOutlined />
                })

            })
            .catch((error) => {
                console.log('EERROR', error);
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            // todo refresh token
                            break;
                        case 400:
                            // todo nose pudo actualizar score
                            break;
                        case 502:
                                // todo peticion mal formada
                            break;
                        default:
                            // todo asegurate de estar conectado a internet
                            break;
                    }
                }
            })

    }

};
