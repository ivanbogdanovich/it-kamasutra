//  docs api
//  https://social-network.samuraijs.com/docs

import * as axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    timeout: 5000000,
    withCredentials: true,
    headers: {
        "API-KEY": "e6cfdfa9-e06f-48fb-8abd-0a53de2d8b83"
    }
});
