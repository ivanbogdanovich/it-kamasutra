import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field, reduxForm } from 'redux-form';

// components
import { Input } from '../../common/form-controls/form-controls';

// validators
import {
    required,
    maxLengthCreator,
    minLengthCreator
} from '../../common/validators/validators';

import styles from './Form.module.css';

const maxLength100 = maxLengthCreator(100);
const minLength5 = minLengthCreator(5);

function LoginForm({ className, handleSubmit, error, captchaUrl }) {
    return (
        <form className={cn(styles.Root, className)} onSubmit={handleSubmit}>
            <Field component={Input}
                name="email"
                placeholder="Введите email"
                type="email"
                className={cn(styles.field)}
                validate={[required, maxLength100, minLength5]}>
            </Field>

            <Field component={Input}
                name="password"
                placeholder="Введите пароль"
                type="password"
                className={cn(styles.field)}
                validate={[required, maxLength100, minLength5]}>
            </Field>

            <Field component={Input}
                name="rememberMe"
                type="checkbox"
                className={cn(styles.checkbox)}
                validate={[required, maxLength100, minLength5]}>
            </Field>

            {error && <span className={cn(styles.errorNote)}>{error}</span>}
            {captchaUrl &&
                <>
                    <img src={captchaUrl} alt="Капча" />

                    <Field component={Input}
                        name="captcha"
                        placeholder="Введите капчу"
                        type="text"
                        className={cn(styles.field)}
                        validate={[required]}>
                    </Field>
                </>
            }
            <button className={cn(styles.button)}>Зарегаться</button>
        </form>
    )
}

const FormLoginRedux = reduxForm({
    form: 'formLogin'
})(LoginForm);

LoginForm.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
}

LoginForm.defaultProps = {
    className: '',
}

export default FormLoginRedux;
