import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <h3>Cognizant</h3>
            <div className={styles.headerLinks}>
                <Link className={styles.Link} to="/">Home</Link>
                <Link className={styles.Link} to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;