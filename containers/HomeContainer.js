import React from 'react';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import { useAppContext } from '../contexts/AppContext';

const HomeContainer = () => {
  const handleGetShows = useAppContext;
  return (
    <>
      <section>
        {/* <p>display home content here</p> */}
        <Search handleGetShows={handleGetShows} />
        <Results handleGetShows={handleGetShows} />
      </section>
    </>
  );
};

export default HomeContainer;
