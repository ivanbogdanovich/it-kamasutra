import React from 'react';

import styles from './Post.module.css';

function Post(props) {
    return (
        <li className={styles.post}>
            <img src="http://lgz.ru/upload/iblock/90c/90c034bff06d9e983769a8d2ede36a3c.jpg" alt="" />
            <span className={styles.like}>{props.likesCounter}</span>
            <span>{props.desc}</span>
        </li>
    )
}

export default Post;
