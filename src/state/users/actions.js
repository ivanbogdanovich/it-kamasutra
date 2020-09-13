// api
import { usersAPI } from './api';

// types
import types from './types';

export function acceptAddFriend(userId) {
    return {
        type: types.ADD_FRIEND,
        userId
    }
}

export function acceptDeleteFriend(userId) {
    return {
        type: types.DELETE_FRIEND,
        userId
    }
}

export function setUsers(users) {
    return {
        type: types.SET_USERS,
        users
    }
}

export function setCurrentPage(currentPage) {
    return {
        type: types.SET_CURRENT_PAGE,
        currentPage
    }
}

export function setTotalCount(totalCount) {
    return {
        type: types.SET_TOTAL_COUNT,
        totalCount
    }
}

export function setToggleIsFetching(isFetching) {
    return {
        type: types.TOGGLE_IS_FETCHING,
        isFetching
    }
}

export function setWaitIsSubscribe(isFetching, userId) {
    return {
        type: types.TOGGLE_IS_WAIT_SUBSCRIBE,
        isFetching,
        userId
    }
}

export function getUsersThunk(currentPage, pageSize) {
    return async dispatch => {
        try {
            const response = await usersAPI.getUsers(currentPage, pageSize);

            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
            dispatch(setCurrentPage(currentPage));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function deleteFriendThunk(userId) {
    return async dispatch => {
        try {
            dispatch(setWaitIsSubscribe(true, userId));
            const response = await usersAPI.deleteFriend(userId);
            if (response.resultCode === 0) {
                dispatch(acceptDeleteFriend(userId));
            }
            dispatch(setWaitIsSubscribe(false, userId));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}

export function addFriendThunk(userId) {
    return async dispatch => {
        try {
            dispatch(setWaitIsSubscribe(true, userId))
            const response = await usersAPI.addFriend(userId);

            if (response.resultCode === 0) {
                dispatch(acceptAddFriend(userId))
            }
            dispatch(setWaitIsSubscribe(false, userId))
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
