// types
import types from './types';

// initial state
let initialState = {
    messagesData: [
        { message: 'YO YO YO' },
        { message: 'URA URA URA' },
        { message: 'Mother Fuck' }
    ]
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case types.ADD_MESSAGE_DIALOGS: {
            return {
                ...state,
                messagesData: [...state.messagesData, { message: action.message }]
            }
        }

        default:
            return state
    }
}
