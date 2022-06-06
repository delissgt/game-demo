import React from "react";
import axios from "axios";
import { notification } from "antd";
import { SmileOutlined, MehOutlined } from "@ant-design/icons";
// import * as config from "../config";
import ConfettiComponent from "../components/ConfettiComponent";
import { checkTokenValid, refreshToken } from "../Helpers/TokenValid";
// const urlBackend = config.urlBackend;
const urlGame = "http://localhost:5000/v1";

export const AttributeGame = (values, history, callbackConfetti) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken !== null) {
        const data = {
            game_section: values.game_section,
            game_level: values.game_level,
            user_answer: values.user_answer,
        };
        // console.log("DATA", data);

        axios
            .put(urlGame + "/score", data, { headers: { Authorization: `Bearer ${accessToken}` } })
            .then(response => {
                // console.log("RESPONSE OK", response.status);
                notification.success({
                    message: "Wooo !!! obtubiste " + response.data["score"] + " / 3 aciertos",
                    icon: <SmileOutlined />,
                });
                if (response.data["score"] === 3){
                    callbackConfetti(true);
                }
            })
            .catch(error => {
                console.log("ERROR", error);
                let message = "Algo malo paso";
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            refreshToken(history,()=>{AttributeGame(values, history)});
                            break;
                        case 400:
                            message = "No se pudo actualizar tus resultados, intentalo mas tarde";
                            notification["error"]({
                                message: message,
                                icon: <MehOutlined />,
                            });
                            break;
                        case 502:
                            message = "Petición mal formada";
                            notification["error"]({
                                message: message,
                                icon: <MehOutlined />,
                            });
                            break;
                        default:
                            message = "Asegurate de estar conectado a internet";
                            notification["error"]({
                                message: message,
                                icon: <MehOutlined />,
                            });
                            break;
                    }
                }
            });
    }
};

export const DataGames = setResponseState => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken !== null) {
        axios
            .get(urlGame + "/games", { headers: { Authorization: `Bearer ${accessToken}` } })
            .then(response => {
                // console.log('responseGames', response);
                // console.log('responseGamesDataGAMESSS', response.data.games);

                const games = response.data.games;
                // console.log("GAMES", games);
                setResponseState(games);
            })
            .catch(error => {
                console.log("ErrorGetGames", error);
            });
    }
};
