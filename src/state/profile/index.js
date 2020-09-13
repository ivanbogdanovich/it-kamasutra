
// types
import types from './types';

// initial state
let initialState = {
    postData: [
        { desc: 'Yo Yo', likesCounter: 23 },
        { desc: 'bla bla bla', likesCounter: 5 }
    ],
    profile: null,
    status: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case types.ADD_MESSAGE_PROFILE: {
            return {
                ...state,
                postData: [...state.postData, { desc: action.message, likesCounter: 12 }],
            }
        }

        case types.SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case types.SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case types.SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state
    }
}
