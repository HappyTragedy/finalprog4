import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={`${styles['container']}`}>
      <div className={styles['logo']}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
      <Link href="/about">
        <div className={styles['navbar']}>About</div>
      </Link>
    </div>
  );
};

export default Navbar;
