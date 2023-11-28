import React from 'react';

import styles from './ThreadTitle.scss';

export interface IThreadTitleProps {
  title: string;
}

export function ThreadTitle(props: IThreadTitleProps) {
  const { title } = props;
  return <h1 className={styles.threadTitle}>{title}</h1>;
}
