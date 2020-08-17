import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import {
    getUsersThunk,
} from '../../state/users/actions';

// components
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../Paginator';
import Item from './Item';

import styles from './Users.module.css';

function Users() {
    const dispatch = useDispatch();
    const pageSize = useSelector(state => state.users.pageSize);
    const currentPage = useSelector(state => state.users.currentPage);
    const users = useSelector(state => state.users.users);
    const totalCount = useSelector(state => state.users.totalCount);
    const isFetching = useSelector(state => state.users.isFetching);
    const subscribersList = useSelector(state => state.users.subscribersList);

    useEffect(() => {
        dispatch(getUsersThunk(currentPage, pageSize));
    }, [currentPage, dispatch, pageSize])

    if (isFetching) {
        return <Preloader />
    }

    return (
        <div className={styles.users}>
            {/* TODO Поправить пагинатор */}
            <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} />

            <ul className={styles.user__list}>
                {
                    users.map((u, index) => {
                        return <Item
                                    key={index}
                                    userid={u.id}
                                    photos={u.photos}
                                    status={u.status}
                                    name={u.name}
                                    followed={u.followed}
                                    subscribersList={subscribersList}
                                />
                    })
                }
            </ul>
        </div>
    )
}

export default Users;
