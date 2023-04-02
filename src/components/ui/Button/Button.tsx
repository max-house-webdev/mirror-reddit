import React, { MouseEventHandler } from 'react';

import styles from './Button.scss';

type TRole = 'primary' | 'secondary';

export interface IButtonProps {
  type: 'submit' | 'button' | 'reset';
  role: TRole;
  textContent: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button(props: IButtonProps) {
  const { type, role, textContent, onClick, disabled = false } = props;

  const setCLassName = (role: TRole) => {
    switch (role) {
      case 'primary': {
        return styles.primary;
      }

      case 'secondary': {
        return styles.secondary;
      }
    }
  };

  return (
    <button
      type={type}
      className={setCLassName(role)}
      onClick={onClick}
      disabled={disabled}
    >
      {textContent}
    </button>
  );
}
