import React from 'react';

import { Button } from '../../../components';

import { useAppDispatch } from '../../../hooks';
import { shouldUpdatePostList, setLimitPostList } from '../../../features';

export function ButtonLoadMorePosts() {
  const dispatch = useAppDispatch();

  const loadMorePosts = () => {
    const maximumNumberOfItemsToReturnInSliceOfListing = 2;
    dispatch(
      setLimitPostList({ limit: maximumNumberOfItemsToReturnInSliceOfListing })
    );
    dispatch(shouldUpdatePostList());
  };

  return (
    <Button
      role={'primary'}
      type={'button'}
      textContent={'Загрузить еще...'}
      onClick={loadMorePosts}
    />
  );
}
