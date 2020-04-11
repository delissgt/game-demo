import jwt_decode from "jwt-decode";
import axios from "axios";
import {notification, message} from "antd";

const backUrl = "http://localhost:5000/v1";

export function checkTokenValid() {
    const accessToken = localStorage.getItem('access_token');
    // const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const date = decoded['exp'] * 1000;
        const now = Date.now();

        if (now >= date) {
            // localStorage.clear();
            return  false
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

export function refreshToken(history) {

    const refreshToken = localStorage.getItem('refresh_token');

    axios.post(backUrl+'/refresh-token', {}, { headers: {"Authorization" : `Bearer ${refreshToken}` } })
        .then((response) => {
            localStorage.setItem('access_token', response.data['access_token']);
        })
        .catch((error) => {
            deleteTokenValid();

            history.push("/login");
            notification['error']({
                message: "Uppsss! Tu sesion ha expirado",
            });

        });
}