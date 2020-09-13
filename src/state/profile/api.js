// api
import { instanceAxios } from '../../utils/api';

export const profileAPI = {
    async getProfile(userId) {
        try {
            const response = await instanceAxios.get(`profile/${userId}`);

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    },

    async getUserStatus(userId) {
        try {
            const response = await instanceAxios.get(`profile/status/${userId}`);

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    },

    async updateStatus(status) {
        try {
            const response = await instanceAxios.put(`profile/status/`, { status: status });

            return response.data;
        }
        catch(e) {
            throw new Error(e);
        }
    },

    async sendPhoto(photo) {
        try {
            const formData = new FormData();
            formData.append('image', photo);
            const response = await instanceAxios.put(`profile/photo/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
            }});

            return response.data
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
