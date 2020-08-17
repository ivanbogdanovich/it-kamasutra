import React, { useEffect, lazy, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';

// actions
import { getInitializeThunk } from '../src/state/app/actions';

// components
import Preloader from './components/common/Preloader';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Login from './components/Login';
import Footer from './components/Footer';

import './App.css';

// lazyload components
const Dialogs = lazy(() => import('./components/Dialogs'));
const Users = lazy(() => import('./components/Users'));

function App() {
    const dispatch = useDispatch();
    const initialized = useSelector(state => state.app.initialized);

    useEffect(() => {
        dispatch(getInitializeThunk());
    }, [dispatch])

    if (!initialized) {
        return <Preloader />
    }

    return (
        <div className="container">
            <Header />
            <Sidebar />

            <div className="content">
                <Switch>
                    {<Route exact path="/" render={() => {
                        return <Redirect to={"/profile"} />
                    }} />}

                    {<Route path="/profile/:userId?" render={() => {
                        return <Profile />
                    }} />}

                    <Route path="/dialogs" render={() => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <Dialogs />
                        </Suspense>
                    }} />

                    <Route path="/users" render={() => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <Users />
                        </Suspense>
                    }} />

                    <Route path="/login" render={() => {
                        return <Login />
                    }} />

                    <Route path="*" render={() => {
                        return <div>404 page</div>
                    }} />
                </Switch>
            </div>

            <Footer />
        </div>
    )
}

export default compose(withRouter)(App);
