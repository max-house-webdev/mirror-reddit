import React from 'react';
import classNames from 'classnames';

import styles from './ActionButton.scss';

import {
  IconSave,
  IconShare,
  IconComplain,
  IconComment,
  IconDelete,
  IconTriangleUp,
} from '../../../assets/svg';

type TAction =
  | 'share'
  | 'save'
  | 'answer'
  | 'complain'
  | 'delete'
  | 'count'
  | 'update post list'
  | 'load all posts';

export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  action: TAction;
  textContent?: boolean;
  rotate?: boolean;
  translate?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ActionButton(props: IButtonProps) {
  const {
    type = 'button',
    action,
    onClick,
    textContent = true,
    rotate = false,
    translate = false,
  } = props;

  let role: Record<string, JSX.Element | string | null> = {};

  switch (action) {
    case 'share':
      role = { icon: <IconShare />, text: 'Поделиться' };
      break;
    case 'save':
      role = { icon: <IconSave />, text: 'Сохранить' };
      break;
    case 'answer':
      role = { icon: <IconComment />, text: 'Ответить' };
      break;
    case 'complain':
      role = { icon: <IconComplain />, text: 'Пожаловаться' };
      break;
    case 'delete':
      role = { icon: <IconDelete />, text: 'Удалить' };
      break;
    case 'count':
      role = { icon: <IconTriangleUp />, text: '' };
      break;
  }

  const classes = classNames(
    styles['actionButton'],
    {
      [styles['actionButtonText']]: textContent,
    },
    {
      [styles['rotate180']]: rotate,
    },
    {
      [styles['translate']]: translate,
    }
  );

  const { icon } = role;
  const text = textContent ? role.text : '';

  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
