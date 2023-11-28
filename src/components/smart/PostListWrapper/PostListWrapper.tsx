import React from 'react';

import { useAppSelector } from '../../../hooks';

import { PostList, LoadingIndicatorWrapper } from '../../../components';
import { Error, PortalWrapper } from '../../../../utils/components';

export function PostListWrapper() {
  const loadingStatus = useAppSelector((state) => state.request.status);
  const errorMessage = useAppSelector((state) => state.request.error);
  const loadingData = useAppSelector((state) => state.request.data);
  const noData = useAppSelector((state) => state.postList.data.length == 0);

  const shouldAddPosts =
    loadingStatus === 'pending' && loadingData == 'posts' && !noData;

  if (shouldAddPosts) {
    return (
      <>
        <PostList />
        <PortalWrapper>
          <LoadingIndicatorWrapper role={'loading'} data={loadingData} />
        </PortalWrapper>
      </>
    );
  }

  if (loadingStatus === 'failed' && loadingData == 'posts') {
    return <Error errorMessage={errorMessage} />;
  }

  return <PostList />;
}
