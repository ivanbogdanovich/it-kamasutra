import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Footer.module.css';

function Footer({ className }) {
    return (
        <footer className={cn(styles.Root, className)} role="contentinfo">
            <h4>Главное – кайфовать по жизни</h4>
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
}

Footer.defaultProps = {
    className: '',
}

export default Footer;