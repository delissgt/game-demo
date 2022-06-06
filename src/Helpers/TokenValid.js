import jwt_decode from "jwt-decode";
import axios from "axios";
import { notification } from "antd";
import * as config from "../config";

const urlBackend = config.urlBackend;

export function checkTokenValid() {
    const accessToken = localStorage.getItem("access_token");
    // const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const date = decoded["exp"] * 1000;
        const now = Date.now();

        if (now >= date) {
            // localStorage.clear();
            return false;
        } else {
            return true;
        }
    } else {
        // localStorage.clear();
        return false;
    }
}

export function deleteTokenValid() {
    localStorage.clear();
}

// todo add setResponse function in all calls if not needed so ()=>{}
export function refreshToken(history, setResponse) {
    console.log('REFRESH TOKEN');
    const refreshToken = localStorage.getItem("refresh_token");

    axios
        .post(urlBackend + "/refresh-token", {}, { headers: { Authorization: `Bearer ${refreshToken}` } })
        .then(response => {
            localStorage.setItem("access_token", response.data["access_token"]);
            console.log('ACCESSO TOKEN REFRESCADO', response.data["access_token"]);
            setResponse();
        })
        .catch(error => {
            deleteTokenValid();

            history.push("/login");
            notification["error"]({
                message: "Uppsss! Tu sesion ha expirado",
            });
        });
}

// todo components and funtions properties better code
// Prop.refreshToken {
//     'history': string
// }
