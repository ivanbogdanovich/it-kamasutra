// types
import types from './types';

export function addMessage(message) {
    return {
        type: types.ADD_MESSAGE_DIALOGS,
        message: message
    }
}