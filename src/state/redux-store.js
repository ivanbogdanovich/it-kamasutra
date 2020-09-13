import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

// reducers
import dialogs from './dialogs';
import profile from './profile';
import users from './users';
import auth from './auth';
import app from './app';

const reducers = combineReducers({
    dialogs: dialogs,
    profile: profile,
    users: users,
    auth: auth,
    form: formReducer,
    app: app,
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
);

const store = createStore(reducers, enhancer);

window.__store__ = store;

export default store;
