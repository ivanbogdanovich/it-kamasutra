import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// pic
import preloaderImg from '../../../assets/images/preloader.svg';

import styles from './Preloader.module.css';

function Preloader({ className }) {
    return <div className={cn(styles.Root, className)}>
        <img src={preloaderImg} alt="" />
    </div>
}

Preloader.propTypes = {
    className: PropTypes.string,
};

Preloader.defaultProps = {
    className: '',
};

export default Preloader;
