// types
import types from './types';

// initial state
let initialState = {
    messagesData: [
        { message: 'Yo Yo Yo' },
        { message: 'Yo Yo Yo' },
        { message: 'Yo Yo Yo' },
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
