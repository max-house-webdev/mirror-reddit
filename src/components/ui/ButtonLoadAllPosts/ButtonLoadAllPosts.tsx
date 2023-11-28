import React from 'react';

import { Button } from '../../../components';

import { useAppDispatch } from '../../../hooks';
import { shouldUpdatePostList, setLimitPostList } from '../../../features';

export function ButtonLoadAllPosts() {
  const dispatch = useAppDispatch();

  const loadAllPosts = () => {
    const maximumNumberOfItemsToReturnInSliceOfListing = 99;
    dispatch(
      setLimitPostList({ limit: maximumNumberOfItemsToReturnInSliceOfListing })
    );
    dispatch(shouldUpdatePostList());
  };

  return (
    <Button
      role={'primary'}
      type={'button'}
      textContent={'Загрузить все'}
      onClick={loadAllPosts}
    />
  );
}
