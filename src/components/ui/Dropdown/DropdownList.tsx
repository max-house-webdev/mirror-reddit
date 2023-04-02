import React from 'react';

import styles from './DropdownList.scss';

import { generateRandomString } from '../../../../utils/functions/generateRandomString';

import { GenericList } from '../../../../utils/components';

import {
  IconComplain,
  IconHide,
  IconComment,
  IconSaveDropdown,
  IconShareDropdown,
} from '../../../assets/svg';

export interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  child?: React.ReactElement;
}

export function DropdownList() {
  const items = [
    {
      text: 'Комментарии',
      className: styles.menuItemTablet,
      child: <IconShareDropdown />,
    },
    {
      text: 'Поделиться',
      className: styles.menuItemTablet,
      child: <IconComment />,
    },
    {
      text: 'Скрыть',
      className: styles.menuItem,
      child: <IconHide />,
    },
    {
      text: 'Сохранить',
      className: styles.menuItemTablet,
      child: <IconSaveDropdown />,
    },
    {
      text: 'Пожаловаться',
      className: styles.menuItem,
      child: <IconComplain />,
    },
  ];

  const list = items.map((item) => {
    return {
      As: 'button',
      type: 'button',
      id: generateRandomString(),
      ...item,
    } as IItem;
  });

  return <GenericList list={list} />;
}
