
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post/Post';

// components
import FormPostsRedux from '../Form/Form';

// actions
import { addMessage } from '../../../state/profile/actions';

import styles from './MyPosts.module.css';

function MyPosts({ className }) {
    const posts = useSelector(state => state.profile.postData);
    const dispatch = useDispatch();

    const postItems = useMemo(() =>
        posts.map((p, i) => {
            return <Post desc={p.desc} likesCounter={p.likesCounter} key={i} />
        })
    , [posts]);

    const sendMessage = (value) => {
        dispatch(addMessage(value.message));
    }

    return (
        <div className={cn(styles.Root, className)}>
            <h2>Компонента MyPosts</h2>

            <div className="posts">
                <ul className={styles.list}>
                    {postItems}
                </ul>

                <FormPostsRedux onSubmit={sendMessage} />
            </div>
        </div>
    )
}

MyPosts.propTypes= {
    className: PropTypes.string,
}

MyPosts.defaultProps= {
    className: '',
}

export default MyPosts;
