import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

// components
import Status from '../Status/Status';

// actions
import { sendPhotoThunk } from '../../../state/profile/actions';
//import { instanceAxios } from '../../../utils/api';

// pic
import userPhoto from '../../../assets/images/user.png';

import styles from './Info.module.css';

function Info({ className, profile, status, isOwner }) {
    const dispatch = useDispatch();

    function onPhotoSelected(e) {
        if (Boolean(e.target.files)) {
            dispatch(sendPhotoThunk(e.target.files[0]));
        }
    }

    return (
        <div className={cn(styles.Root, className)}>
            <img
                className={styles.img}
                src={Boolean(profile.photos.large) ? profile.photos.large : userPhoto}
                alt=""
            />

            {isOwner && <input type="file" onChange={onPhotoSelected} />}

            <Status status={status} />

            <ul className={cn(styles.List)}>
                {Boolean(profile.aboutMe) && <li className={cn(styles.List__item)}>
                    <span className={cn(styles.List__title)}>Обо мне</span>
                    <span>{profile.aboutMe}</span>
                </li>}

                {Boolean(profile.contacts) && <ul>
                    {profile.contacts.facebook && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Facebook</span>
                        <span>{profile.contacts.facebook}</span>
                    </li>}

                    {Boolean(profile.contacts.website) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Website</span>
                        <span>{profile.contacts.website}</span>
                    </li>}

                    {Boolean(profile.contacts.vk) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Vk</span>
                        <span>{profile.contacts.vk}</span>
                    </li>}

                    {Boolean(profile.contacts.twitter) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Twitter</span>
                        <span>{profile.contacts.twitter}</span>
                    </li>}

                    {Boolean(profile.contacts.instagram) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Instagram</span>
                        <span>{profile.contacts.instagram}</span>
                    </li>}

                    {Boolean(profile.contacts.youtube) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Youtube</span>
                        <span>{profile.contacts.youtube}</span>
                    </li>}

                    {Boolean(profile.contacts.github) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>Github</span>
                        <span>{profile.contacts.github}</span>
                    </li>}

                    {Boolean(profile.contacts.mainLink) && <li className={cn(styles.List__item)}>
                        <span className={cn(styles.List__title)}>MainLink</span>
                        <span>{profile.contacts.mainLink}</span>
                    </li>}
                </ul>
                }

                {Boolean(profile.lookingForAJob) && <li className={cn(styles.List__item)}>
                    <span className={cn(styles.List__title)}>Ищу работу</span>
                </li>}

                {Boolean(profile.lookingForAJobDescription) && <li className={cn(styles.List__item)}>
                    <span className={cn(styles.List__title)}>Какую работу ищу</span>
                    <span>{profile.lookingForAJobDescription}</span>
                </li>}

                {Boolean(profile.fullName) && <li className={cn(styles.List__item)}>
                    <span className={cn(styles.List__title)}>Полное имя</span>
                    <span>{profile.fullName}</span>
                </li>}

                {Boolean(profile.userId) && <li className={cn(styles.List__item)}>
                    <span className={cn(styles.List__title)}>userId</span>
                    <span>{profile.userId}</span>
                </li>}
            </ul>
        </div>
    )
}

Info.propTypes = {
    className: PropTypes.string,
    profile: PropTypes.shape({
        aboutMe: PropTypes.string,
        contacts: PropTypes.shape({
            facebook: PropTypes.string,
            website: PropTypes.string,
            vk: PropTypes.string,
            twitter: PropTypes.string,
            instagram: PropTypes.string,
            youtube: PropTypes.string,
            github: PropTypes.string,
            mainLink: PropTypes.string,
        }),
        lookingForAJob: PropTypes.bool,
        lookingForAJobDescription: PropTypes.string,
        fullName: PropTypes.string,
        userId: PropTypes.number,
        photos: PropTypes.shape({
            small: PropTypes.string,
            large: PropTypes.string
        })
    }),
    status: PropTypes.string,
    isOwner: PropTypes.bool,
}

Info.defaultProps = {
    className: '',
    profile: PropTypes.shape({
        aboutMe: null,
        contacts: PropTypes.shape({
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        }),
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: PropTypes.shape({
            small: null,
            large: null
        })
    }),
    status: null,
    isOwner: false,
}

export default Info;
