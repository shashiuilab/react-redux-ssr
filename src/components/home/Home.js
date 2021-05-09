import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/actions/fetchData';
import styles from './Home.scss';
import Header from '../header/Header';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [])
    return (
      <>
        <Header />
        <div className={styles.Home}>
          <h1>Home page</h1>
        </div>
      </>
    );
}

export default Home;

Home.propTypes = {
};

Home.defaultProps = {
};