import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <div className={styles.App}>
          {this.props.children}
          <div className={styles.Footer}>Shashidhar@CTS - MIT License</div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};