import React from 'react';
import classNames from 'classnames';

import styles from './Break.scss';

export interface IBreakProps {
  size: 4 | 8 | 12 | 16 | 20;
  padding?: 'top' | 'right';
  inline?: boolean;
}

export function Break({ size, padding = 'top', inline = false }: IBreakProps) {
  const classes = classNames(styles[`${padding}${size}`], {
    [styles['inline']]: inline,
  });

  return <div className={classes} />;
}
