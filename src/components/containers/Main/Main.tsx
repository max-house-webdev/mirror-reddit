import React from 'react';

import styles from './Main.scss';

import { Container } from '../../../../utils/components';
import type { IContainerProps } from '../../../../utils/components';

export function Main(props: IContainerProps) {
  const { children } = props;
  return (
    <Container As={'main'} className={styles.main}>
      {children}
    </Container>
  );
}
