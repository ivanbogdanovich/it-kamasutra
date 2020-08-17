// types
import types from './types';

// initial state
const initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false,
    captcha: null,
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_AUTH_DATA_USER:
        case types.GET_CAPTCHA_SUCCESS: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }
    }
}
