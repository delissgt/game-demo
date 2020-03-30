import jwt_decode from "jwt-decode";


export function checkTokenValid() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (accessToken !== null) {
        const decoded = jwt_decode(accessToken);
        const date = decoded['exp'] * 1000;
        const now = Date.now();

        if (now >= date) {
            localStorage.clear();
            return  false
        } else {
            return true;
        }
    } else {
        localStorage.clear();
        return false;
    }
}


export function deleteTokenValid() {
    localStorage.clear();
}