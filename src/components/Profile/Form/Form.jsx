import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field, reduxForm } from 'redux-form';

// validators
import { required,
    maxLengthCreator,
    minLengthCreator
} from '../../common/validators/validators';

// components
import { Textarea } from '../../common/form-controls/form-controls';

import styles from './Form.module.css'

const maxLength15 = maxLengthCreator(15);
const minLength2 = minLengthCreator(2);

function FormPosts({className, handleSubmit}) {
    return (
        <form className={cn(styles.Root, className)} onSubmit={handleSubmit}>
            <Field
                name="message"
                className={styles.textarea}
                component={Textarea}
                placeholder="your news"
                validate={[required, maxLength15, minLength2]}
            />

            <button className={styles.button}>Опубликовать</button>
        </form>
    )
}

const FormPostsRedux = reduxForm({
    form: 'formPosts'
})(FormPosts);

FormPosts.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func,
};

FormPosts.defaultProps = {
    className: '',
    handleSubmit: () => {},
};

export default FormPostsRedux;
