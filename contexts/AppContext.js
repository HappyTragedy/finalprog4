import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ defaultValue = [], children }) => {
  const [showsData, setShowsData] = useState(defaultValue);
  const [singleShowData, setSingleShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const handleGetShows = async (query) => {
    try {
      const show = await axios
        .get(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((res) => setShowsData(res.show));
      setLoading(false);
      setShowLoading(false);
      console.log(show);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSingleShow = async (id) => {
    try {
      const singleShow = await axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then((res) => setSingleShowData(res.show));
      setLoading(false);
      setShowLoading(false);
      console.log(singleShow);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        showsData,
        handleGetShows,
        loading,
        singleShowData,
        handleGetSingleShow,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppProvider, AppContext };
