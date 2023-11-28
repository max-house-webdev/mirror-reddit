import React from 'react';

import styles from './SearchBlockContainer.scss';

import { AuthWrapper } from '../../../components';

export function SearchBlockContainer() {
  return (
    <div className={styles.searchBlockContainer}>
      SearchBlock
      <AuthWrapper />
    </div>
  );
}
