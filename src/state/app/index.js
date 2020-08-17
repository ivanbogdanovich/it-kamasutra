// types
import types from './types';

// initial state
const initialState = {
    initialized: false,
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.INITIALIZED_SUCCESS :{
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}
