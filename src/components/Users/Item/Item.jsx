import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// actions
import {
    deleteFriendThunk,
    addFriendThunk,
} from '../../../state/users/actions';

// pic
import userPhoto from '../../../assets/images/user.png';

import styles from './Item.module.css';

function Item({ className, userid, photos, status, name, followed, subscribersList }) {
    const dispatch = useDispatch();

    return (
        <li key={userid} className={cn(styles.Root, className)}>
            <NavLink to={"/profile/" + userid}>
                <img src={photos.large ? photos.large : userPhoto} className={styles.img} alt="" />
                <span>{status}</span>
                <span>{name}</span>
            </NavLink>

            <div>
                {
                    followed ?
                        <button
                            disabled={subscribersList.some(id => id === userid)}
                            className={styles.button}
                            onClick={() => {
                                dispatch(deleteFriendThunk(userid))
                            }}>
                            delete friend
            </button>
                        :
                        <button
                            disabled={subscribersList.some(id => id === userid)}
                            className={styles.button} onClick={() => {
                                dispatch(addFriendThunk(userid))
                            }}>
                            add friend
            </button>
                }
            </div>
        </li>
    )
}

Item.propTypes = {
    className: PropTypes.string,
    userid: PropTypes.number.isRequired,
}

Item.defaultProps = {
    className: '',
}

export default Item;
