import React, { useEffect, useState } from 'react';

import styles from './Dropdown.scss';

import { IconThreeCircles } from '../../../assets/svg';
import { DropdownBody } from './DropdownBody';

export interface IDropdownProps {
  isOpen: boolean;
}
export function Dropdown(props: IDropdownProps) {
  const { isOpen } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownBtnHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    const dropdownContainer = event.currentTarget.parentElement;
    if (!dropdownContainer) return null;

    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={dropdownBtnHandleClick}>
        <button type='button' className={styles.menuButton}>
          <IconThreeCircles />
        </button>
      </div>
      {isDropdownOpen && <DropdownBody onClose={closeDropdown} />}
    </div>
  );
}
