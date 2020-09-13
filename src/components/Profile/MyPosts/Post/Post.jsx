import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Post.module.css';

function Post({className, likesCounter, desc}) {
    return (
        <li className={cn(styles.Root, className)}>
            <img src="http://lgz.ru/upload/iblock/90c/90c034bff06d9e983769a8d2ede36a3c.jpg" alt="" />
            <span className={styles.like}>{likesCounter}</span>
            <span>{desc}</span>
        </li>
    )
}

Post.propTypes = {
    className: PropTypes.string,
    likesCounter: PropTypes.number,
    desc: PropTypes.string
}

Post.defaultProps = {
    className: '',
    likesCounter: 12,
    desc: ''
}

export default Post;
