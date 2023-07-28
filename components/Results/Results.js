import React from 'react';
import styles from './Results.module.css';
import { useAppContext } from '../../contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import Show from '../Show/Show';

const Results = () => {
  const handleGetShows = useAppContext;
  const FeaturedShows = () => {
    <div className={styles.results_shows}>
      <Show />
    </div>;
  };

  return (
    <div className={styles.results_container}>
      <h2>Search Results</h2>
      {FeaturedShows()}
    </div>
  );
};

export default Results;
