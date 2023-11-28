import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { useAppSelector } from '../../../hooks';
import { CommentForm } from '../../../components';
import { useRecoilState } from 'recoil';

import { commentListState, commentValueState } from '../../../features';
import { generateRandomString } from '../../../../utils/functions/generateRandomString';
import { getHoursDifference } from '../../../../utils/functions/getHoursDifference';
import { ICommentProps } from '../Comment/Comment';

export function CommentFormWrapper() {
  //* redux
  const { userData } = useAppSelector((state) => state.auth);
  const { postId, subreddit } = useAppSelector((state) => state.activePost);

  const userName = userData.name;
  const appealName = `${userName}, `;

  //* recoil
  const [commentValue, setCommentValue] = useRecoilState(commentValueState);

  const [commentLst, setCommentList] = useRecoilState(commentListState);

  interface IValues {
    commentField: string;
  }
  //* formik
  const formikConfig = {
    initialValues: {
      commentField: postId ? commentValue[postId] : commentValue['error'],
    },

    onSubmit: (
      values: IValues,
      actions: { setSubmitting: (arg: boolean) => void }
    ) => {
      const id = generateRandomString();
      const author = userData.name;
      const avatarSrc = userData.avatar || '';
      const createdAt = getHoursDifference(Date.now() - 1);

      const value = values.commentField;

      const myComment: ICommentProps = {
        id,
        author,
        avatarSrc,
        createdAt,
        value,
        subreddit: subreddit || '',
      };

      setCommentList({ user: [myComment], list: commentLst.list });

      if (postId) {
        setCommentValue({ error: commentValue.error });
      }

      actions.setSubmitting(false);
    },
  };

  const { values, handleSubmit, handleChange } = useFormik(formikConfig);

  useEffect(() => {
    if (!postId) return;
    //* update comment state via postId
    setCommentValue((commentValue) => {
      return { ...commentValue, [postId]: values.commentField };
    });
  }, [values.commentField, postId, setCommentValue]);

  return (
    <CommentForm
      appealName={appealName}
      commentField={postId ? commentValue[postId] : commentValue['error']}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
