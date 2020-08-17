import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

    _state: {
        profilePage: {
            postData: [
                { desc: 'Yo Yo mushiki', likesCounter: 23 },
                { desc: 'It\'s second first', likesCounter: 5 }
            ],
            focusPostMessage: ''
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Ванес' },
                { id: 2, name: 'Валера' },
                { id: 3, name: 'Димас' },
                { id: 4, name: 'Гена' },
                { id: 5, name: 'Лёха' }
            ],

            messagesData: [
                { message: 'YO YO YO' },
                { message: 'URA URA URA' },
                { message: 'Mother Fuck' }
            ],
            focusPostMessage: ''
        },
    },

    getState() {
        return this._state
    },

    _callSubsciber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubsciber = observer
    },

    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubsciber(this._state);
    }
}

window.store = store;

export default store;
