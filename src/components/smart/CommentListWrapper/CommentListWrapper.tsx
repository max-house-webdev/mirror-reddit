import React from 'react';
import { useAppSelector, useCommentListData } from '../../../hooks';
import { CommentList, LoadingIndicatorWrapper } from '../../../components';
import { Error } from '../../../../utils/components';

export function CommentListWrapper() {
  useCommentListData();

  const loadingStatus = useAppSelector((state) => state.request.status);
  const errorMessage = useAppSelector((state) => state.request.error);
  const loadingData = useAppSelector((state) => state.request.data);

  const shouldLoadCommets =
    loadingStatus === 'pending' && loadingData == 'comments';

  if (shouldLoadCommets) {
    return <LoadingIndicatorWrapper role={'loading'} data={loadingData} />;
  }

  if (loadingStatus === 'failed' && loadingData == 'comments') {
    // eslint-disable-next-line react/jsx-no-undef
    return <Error errorMessage={errorMessage} />;
  }

  return <CommentList />;
}
