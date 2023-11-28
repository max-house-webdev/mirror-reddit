import React, { useState } from 'react';

import styles from './CommentSorter.scss';
import { IconShevronDown, IconShevronUp } from '../../../assets/svg';

export function CommentSorter() {
  const label = 'Сортировать по';
  const category = 'Лучшее';

  const [down, setDown] = useState(true);

  const handleClick = () => {
    setDown(!down);
  };

  return (
    <div className={styles.commentSorter}>
      <label className={styles.label}>{label}</label>
      <button type='button' className={styles.button} onClick={handleClick}>
        {category}
        {down ? <IconShevronDown /> : <IconShevronUp />}
      </button>
    </div>
  );
}
