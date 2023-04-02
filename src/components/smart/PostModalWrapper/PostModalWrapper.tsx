import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './PostModalWrapper.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useCallbackOnMouseClickWithRef } from '../../../../utils/hooks/useCallbackOnExternalMouseEventWithRef';
import { resetActivePostId } from '../../../features';
import {
  PostModal,
  CommentSorter,
  CommentFormWrapper,
  CommentListWrapper,
} from '../../../components';

export function PostModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const activePostId = useAppSelector((state) => state.activePost.postId);
  const postListData = useAppSelector((state) => state.postList.data);

  const activePost = postListData.filter(
    (post) => post.postId === activePostId
  )[0];

  const onClose = () => {
    setIsOpen(() => !isOpen);

    if (isOpen) {
      dispatch(resetActivePostId());
      navigate('/posts');
    }
  };

  const [postRef] = useCallbackOnMouseClickWithRef(onClose);

  return (
    <div className={styles.modal} ref={postRef}>
      <PostModal {...activePost} />
      <CommentFormWrapper />
      <CommentSorter />
      <CommentListWrapper />
    </div>
  );
}
