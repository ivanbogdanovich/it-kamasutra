import React from 'react';

import styles from './form-controls.module.css';

function FormControl({ input, meta, child, ...props }) {
    const hasError = meta.touched && meta.error;

    return (<div>
        <div className={styles.field + ' ' + (hasError ? styles.error : '')}>
            {props.children}
            { hasError && <span className={styles.errorNote}>{meta.error}</span>}
        </div>
    </div>
)}

export function Textarea(props) {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export function Input(props) {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}
