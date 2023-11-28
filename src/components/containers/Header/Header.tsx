import React from 'react';

import styles from './Header.scss';

import { Container } from '../../../../utils/components';

import {
  SearchBlockContainer,
  SortBlockContainer,
  ThreadTitle,
} from '../../../components';
import { useAppNavigate } from '../../../hooks';

export function Header() {
  useAppNavigate();

  return (
    <Container As={'header'} className={styles.header}>
      <SearchBlockContainer />
      <ThreadTitle title={'Личный кабинет'} />
      <SortBlockContainer />
    </Container>
  );
}
