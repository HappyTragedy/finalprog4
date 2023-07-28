import React from 'react';
import styles from './AboutContainer.module.css';

const AboutContainer = () => {
  return (
    <div className={styles.about_container}>
      <h1>Final de Programacion de 4to</h1>
      <h2>Alumna Fernandez Micaela Belen</h2>
      <p>
        Status: <span> In Spain, but without the S</span>
      </p>
    </div>
  );
};

export default AboutContainer;
