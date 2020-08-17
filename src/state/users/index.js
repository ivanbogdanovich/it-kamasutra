// types
import types from './types';

// initial state
const initialState = {
    users: [],
    totalCount: 21,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    subscribersList: []
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }

        case types.DELETE_FRIEND: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }

        case types.SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case types.SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case types.SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }

        case types.TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case types.TOGGLE_IS_WAIT_SUBSCRIBE: {
            return {
                ...state,
                subscribersList: action.isFetching ?
                    [...state.subscribersList, action.userId] :
                    state.subscribersList.filter(id => {
                        return id !== action.userId
                    })
            }
        }

        default:
            return state
    }
}
