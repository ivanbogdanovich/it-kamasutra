import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css';

function Sidebar({ className }) {
    return (
        <aside className={cn(styles.Root, className)}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                                to="/profile"
                                className={styles.item}
                                activeClassName={styles.active}>
                                    Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                                to="/dialogs"
                                className={styles.item}
                                activeClassName={styles.active}>
                                    Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                                to="/users"
                                className={styles.item}
                                activeClassName={styles.active}>
                                    Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

Sidebar.prototypes = {
    className: PropTypes.string,
}

Sidebar.defaultProps = {
    className: '',
}

export default Sidebar;
