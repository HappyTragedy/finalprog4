import { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

const ShowContainer = ({ id }) => {
  const handleSingleShow = useAppContext;
  useEffect(() => {
    if (id) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <>{/* <p>display show info here</p> */}</>;
};

export default ShowContainer;
