import React from 'react';
import { LoadingIndicatorWrapper } from '../components';

export function UnauthorizedPage() {
  return (
    <>
      <LoadingIndicatorWrapper
        role={'empty'}
        data={'should authorize'}
        usePortal={false}
      />
    </>
  );
}
