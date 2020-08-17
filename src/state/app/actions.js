// actions
import { getMeThunk } from '../auth/actions';

// types
import types from './types';

export function initializedSuccess() {
    return { type: types.INITIALIZED_SUCCESS }
}

export function getInitializeThunk() {
    return async dispatch => {
        try {
            await dispatch(getMeThunk());
            dispatch(initializedSuccess());
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
