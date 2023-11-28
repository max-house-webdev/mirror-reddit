import React from 'react';

import styles from './PostListControlsContainer.scss';

import { Container } from '../../../../utils/components';
import {
  ButtonLoadMorePosts,
  ButtonLoadAllPosts,
  ButtonClearPostList,
} from '../../../components';

export function PostListControlsContainer() {
  return (
    <Container className={styles.postListControlsContainer}>
      <ButtonLoadMorePosts />
      <ButtonClearPostList />
      <ButtonLoadAllPosts />
    </Container>
  );
}
