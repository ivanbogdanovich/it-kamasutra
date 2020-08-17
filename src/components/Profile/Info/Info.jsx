import React from 'react';

// components
import Status from '../Status/Status';

import styles from './Info.module.css';

function Info({ profile, status }) {

    return (
        <>
            <div className={styles.user}>
                <img className={styles.img} src={profile.photos.large} alt=""/>

                <Status status={status} />
            </div>
        </>
    )
}

export default Info;
