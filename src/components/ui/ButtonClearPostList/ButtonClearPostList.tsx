import React from 'react';

import { Button } from '../../../components';

import { useAppDispatch } from '../../../hooks';
import { resetPostList } from '../../../features';

export function ButtonClearPostList() {
  const dispatch = useAppDispatch();

  const clearPostList = () => {
    dispatch(resetPostList());
  };

  return (
    <Button
      role={'secondary'}
      type={'button'}
      textContent={'Очистить ленту'}
      onClick={clearPostList}
    />
  );
}
