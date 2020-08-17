import defineActionTypes from '../../utils/defineActionTypes';

export default defineActionTypes('users', [
    'ADD_FRIEND',
    'DELETE_FRIEND',
    'SET_USERS',
    'SET_CURRENT_PAGE',
    'SET_TOTAL_COUNT',
    'TOGGLE_IS_FETCHING',
    'TOGGLE_IS_WAIT_SUBSCRIBE',
])
