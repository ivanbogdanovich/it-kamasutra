// api
import { instanceAxios } from '../../utils/api';

export const authMeAPI = {
    async getAuthMe() {
        try {
            const response = await instanceAxios.get('/auth/me');
            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    },

    async login(email, password, rememberMe, captcha ) {
        try {
            const response = await instanceAxios.post('/auth/login', {
                email: email,
                password: password,
                rememberMe: rememberMe,
                captcha: captcha })

            return response.data
        }
        catch(e) {
            throw new Error(e);
        }
    },

    async loginOut() {
        try {
            const response = await instanceAxios.delete('/auth/login');

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export const securityAPI = {
    async getCaptcha() {
        try {
            const response = await instanceAxios.get('/security/get-captcha-url');

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    },
}
