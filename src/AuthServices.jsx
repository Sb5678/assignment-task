import axios from "axios";

export class AuthServices {
    static serverURL = "http://localhost:3000"; 

    static register(user) {
        const dataURL = `${this.serverURL}/register`;
        return axios.post(dataURL, user);
    }

    static login(credentials) {
        const dataURL = `${this.serverURL}/login`;
        return axios.post(dataURL, credentials);
    }
}
