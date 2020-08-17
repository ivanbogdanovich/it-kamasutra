// api
import { authMeAPI, securityAPI } from './api';

// actions
import { stopSubmit } from 'redux-form';

// types
import types from './types';

export function setAuthUserData(login, email, userId, isAuth) {
    return {
        type: types.SET_AUTH_DATA_USER,
        data: {
            login,
            email,
            userId,
            isAuth
        }
    }
}

export function getCaptchaSuccess(captcha) {
    return {
        type: types.GET_CAPTCHA_SUCCESS,
        data: {
            captcha
        }
    }
}

export function getMeThunk() {
    return async dispatch => {
        try {
            const response = await authMeAPI.getAuthMe();
            if (response.resultCode === 0) {
                const { login, email, id, } = response.data;
                dispatch(setAuthUserData(login, email, id, true));
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function loginThunk(email, password, rememberMe, captcha) {
    return async dispatch => {
        try {
            const response = await authMeAPI.login(email, password, rememberMe, captcha);
            if (response.resultCode === 0) {
                dispatch(getMeThunk());
            } else if (response.resultCode === 10) {
                dispatch(getCaptchaThunk());
            }
            else {
                const message = response.messages
                dispatch(stopSubmit('formLogin', {_error: message ? message : 'some wrong' }));
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function loginOutThunk() {
    return async dispatch => {
        try {
            const response = await authMeAPI.loginOut();
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function getCaptchaThunk() {
    return async dispatch => {
        try {
            const response = await securityAPI.getCaptcha();
            const captchaUrl = response.url;
            dispatch(getCaptchaSuccess(captchaUrl));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
