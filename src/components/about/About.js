import PropTypes from 'prop-types';
import React from 'react';
import styles from './About.scss';
import Header from '../header/Header';

const About = () => {
    return (
      <>
        <Header />
        <div className={styles.About}>
          <h1>About page</h1>
        </div>
      </>
    );
}

About.propTypes = {
};

About.defaultProps = {
};

export default About;