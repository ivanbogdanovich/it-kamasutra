// api
import { instanceAxios } from '../../utils/api';
import { profileAPI } from '../profile/api';

// constants
import { STYLE_CONSOLE } from '../../constants/constants';

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        const response = await instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`);

        return response.data;
    },

    async addFriend(id) {
         const response = await instanceAxios.post(`follow/${id}`);

         return response.data;
    },

    async deleteFriend(id) {
        const response = await instanceAxios.delete(`follow/${id}`);

        return response.data;
    },

    async getProfile(userId) {
        console.log('%cObsolete method! Please use profileAPI', STYLE_CONSOLE);
        const response = await profileAPI.getProfile(userId);
        return response.data;
    }
}
