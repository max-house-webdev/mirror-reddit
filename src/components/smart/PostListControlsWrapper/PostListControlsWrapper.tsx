import React from 'react';

import { useAppSelector } from '../../../hooks';
import { PostListControlsContainer } from '../.././../components';

export function PostListControlsWrapper() {
  const { authorized } = useAppSelector((state) => state.auth);

  return authorized ? <PostListControlsContainer /> : null;
}
