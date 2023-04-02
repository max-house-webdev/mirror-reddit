import React from 'react';

import { imgWait, imgEmpty } from '../../../assets/img';

import { LoadingIndicator } from '../../../components';

export interface ILoadingIndicatorWrapperProps {
  role: 'empty' | 'loading';
  data:
    | 'empty'
    | 'posts'
    | 'comments'
    | 'user data'
    | 'should authorize'
    | null;
}

export function LoadingIndicatorWrapper(props: ILoadingIndicatorWrapperProps) {
  const { role, data } = props;

  let src = null;
  let alt = null;
  let message = null;

  switch (role) {
    case 'empty':
      src = imgEmpty;
      alt = 'image empty';
      break;

    case 'loading':
      src = imgWait;
      alt = 'image wait';
      break;
  }

  switch (data) {
    case 'empty': {
      message = 'Хмм... здесь пока пусто';
      break;
    }

    case 'posts': {
      message = 'Загружаем ленту постов...';
      break;
    }

    case 'comments': {
      message = 'Загружаем комментарии...';
      break;
    }

    case 'user data': {
      message = 'Проходим авторизацию...';
      break;
    }

    case 'should authorize': {
      message = 'Пожалуйста, авторизуйтесь';
      break;
    }

    default: {
      message = 'Не удалось определить формат данных';
    }
  }

  return <LoadingIndicator src={src} alt={alt} message={message} />;
}
