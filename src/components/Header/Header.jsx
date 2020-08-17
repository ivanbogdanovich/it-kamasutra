import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// actions
import { loginOutThunk } from '../../state/auth/actions';

// pic
import logo from '../../assets/images/yarn-logo.png';

import styles from './Header.module.css';

function Header({ className }) {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);

    const loginOut = () => {
        dispatch(loginOutThunk());
    }

    return (
        <header className={cn(styles.Root, className)}>
            <img src={logo} alt="Логотип ярна" className={cn(styles.Logo)} />

            {isAuth ?
                <div>
                    <div>{login}</div>
                    <button className={cn(styles.button)} onClick={loginOut}>Вылогиниться</button>
                </div> :

                <NavLink to="/login">
                    Login
                </NavLink>
            }
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string,
};

Header.defaultProps = {
    className: '',
};

export default Header;
