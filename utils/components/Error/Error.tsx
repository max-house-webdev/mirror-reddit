import React from 'react';

import styles from './Error.scss';

export interface IErrorProps {
  errorMessage?: string;
}

export function Error(props: IErrorProps) {
  const { errorMessage = 'An unexpected error has occurred' } = props;

  return <h4 className={styles.error}>{errorMessage}</h4>;
}
