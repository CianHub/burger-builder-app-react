import React from 'react';
import { Logo } from '../Logo/logo';
import { NavigationItems } from '../Navigation/navigation';
import styles from './sidedrawer.module.css';

export const Sidedrawer = props => {
  return (
    <div className={styles.Sidedrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};