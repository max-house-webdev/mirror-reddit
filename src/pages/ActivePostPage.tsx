import React from 'react';
import { PostModalWrapper } from '../components';
import { Overlay, PortalWrapper } from '../../utils/components';

export function ActivePostPage() {
  return (
    <>
      <PortalWrapper>
        <Overlay>
          <PostModalWrapper />
        </Overlay>
      </PortalWrapper>
    </>
  );
}
