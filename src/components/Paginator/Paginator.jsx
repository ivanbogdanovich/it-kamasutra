import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

// actions
import { getUsersThunk } from '../../state/users/actions';

import styles from './styles.module.css';

function Paginator({ className, totalCount, pageSize, currentPage, portionSize }) {
    const dispatch = useDispatch();
    const [portionNumber, setPortionNumber] = useState(1);

    const onPageChanged = (pageNumber) => {
        dispatch(getUsersThunk(pageNumber, pageSize));
    }

    const pageCount = Math.ceil(totalCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    const leftMostElemPortion = (portionNumber - 1) * portionSize; // Крайний Левый элемент в порции пагинации
    const rightMostElemPortion = portionNumber * portionSize; // Крайний Правый элемент в порции пагинации

    return (
        <ul className={cn(styles.Root, className)}>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>
            )}

            {
                pages.filter(p => {
                    return p >= leftMostElemPortion && p <= rightMostElemPortion
                }).map((p, id) => {
                    return (
                        <li key={id}
                            className={cn({[styles.Root__item_selected]: currentPage === p }, styles.Root__item )}
                            onClick={() => {onPageChanged(p)}}>
                            {p}
                        </li>
                    )
                })
            }

            {portionNumber < portionCount && (
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
            )}
        </ul>
    )
}

Paginator.propTypes = {
    className: PropTypes.string,
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    portionSize: PropTypes.number.isRequired,
}

Paginator.defaultProps = {
    className: '',
    portionSize: 10,
}

export default Paginator;
