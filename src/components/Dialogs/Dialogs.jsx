import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';

// hoc
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

// actions
import { addMessage } from '../../state/dialogs/actions';

// components
import FormDialogsRedux from './Form';

import styles from './Dialogs.module.css';

function Dialogs({ className }) {
    const dispatch = useDispatch();
    const messagesDefault = useSelector(state => state.dialogs.messagesData);

    const sendMessage = (value) => {
        dispatch(addMessage(value.message));
    }

    return (
        <div className={cn(styles.Root, className)}>
            <h1 className={cn(styles.title)}>Диалоги</h1>

            <div className={cn(styles.dialogs)}>
                <div className={cn(styles.wrap)}>
                    {messagesDefault.map((m, i) => (
                        <p className={cn(styles.text)} key={i}>{m.message}</p>
                    ))}

                    <FormDialogsRedux onSubmit={sendMessage} />
                </div>
            </div>
        </div>
    )
}

Dialogs.propTypes = {
    className: PropTypes.string,
};

Dialogs.defaultProps = {
    className: '',
};

export default compose(
    WithAuthRedirect
)(Dialogs);
