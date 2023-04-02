import React from 'react';

import { useAuth, useAppSelector, usePostListData } from '../../../hooks';

import { Auth, LoadingIndicatorWrapper } from '../../../components';
import { Error, PortalWrapper } from '../../../../utils/components';

export function AuthWrapper() {
  useAuth();
  usePostListData();

  const { authUrl, userData } = useAppSelector((state) => state.auth);

  const { name, avatar } = userData;

  const loadingStatus = useAppSelector((state) => state.request.status);
  const errorMessage = useAppSelector((state) => state.request.error);
  const loadingData = useAppSelector((state) => state.request.data);

  const JSXtemplate = (message: JSX.Element | null) => {
    return (
      <>
        <Auth authUrl={authUrl ?? '#'} userName={name} userAvatar={avatar} />
        {message}
      </>
    );
  };

  let message = null;

  if (loadingStatus === 'pending' && loadingData == 'user data') {
    message = (
      <PortalWrapper>
        <LoadingIndicatorWrapper role={'loading'} data={loadingData} />
      </PortalWrapper>
    );
  }

  if (loadingStatus === 'failed' && loadingData == 'user data') {
    message = (
      <PortalWrapper>
        <Error errorMessage={errorMessage} />
      </PortalWrapper>
    );
  }

  return JSXtemplate(message);
}
