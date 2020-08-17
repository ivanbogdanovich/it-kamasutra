import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field, reduxForm } from 'redux-form';

// components
import { Textarea } from '../../common/form-controls/form-controls';

// validators
import { required,
    maxLengthCreator,
    minLengthCreator }
from '../../common/validators/validators';

import styles from './Form.module.css';

const maxLength15 = maxLengthCreator(15);
const minLength2 = minLengthCreator(2);

function FormDialogs({ className, handleSubmit }) {
    return (
        <form className={cn(styles.Root, className)} onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                placeholder="tell me about you"
                name="message"
                validate={[required, maxLength15, minLength2]}
            />

            <button className={cn(styles.button)}>add message</button>
        </form>
    )
}

const FormDialogsRedux = reduxForm({
    form: 'formDialogs'
})(FormDialogs);

FormDialogs.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func,
};

FormDialogs.defaultProps = {
    className: '',
    handleSubmit: () => {},
};

export default FormDialogsRedux;
