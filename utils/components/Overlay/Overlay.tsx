import React from 'react';

import styles from './Overlay.scss';

export interface IOverlayProps {
  children: React.ReactNode;
}

export function Overlay(props: IOverlayProps) {
  const { children } = props;
  return <div className={styles.overlay}>{children}</div>;
}
