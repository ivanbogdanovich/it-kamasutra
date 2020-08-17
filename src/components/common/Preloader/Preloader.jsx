import React from 'react';

// pic
import preloaderImg from '../../../assets/images/preloader.svg';

import styles from './Preloader.module.css';

function Preloader() {
    return <div className={styles.preloader}>
        <img src={preloaderImg} alt="" />
    </div>
}

export default Preloader;
