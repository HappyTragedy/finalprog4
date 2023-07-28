import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import Image from 'next/image';
import Link from 'next/link';

const Show = ({ show }) => {
  const handleGetShows = useAppContext;
  let { id, name, genres, image, rating } = show;
  return (
    <>
      <Link>
        <div>
          <Image
            src={image?.original}
            width={34}
            height={45}
            alt="imagen de la pelicula"
          />
          <div className="container">
            <h2>
              {name} - {id}
            </h2>
            <p>{genres}</p>
            <p>{rating?.average}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Show;
