import React, { useReducer } from 'react';
import { IconComment } from '../../../assets/svg';

import styles from './CommentCounter.scss';

export interface ICommentCounterProps {
  commentCounter: number;
}

export function CommentCounter(props: ICommentCounterProps) {
  const { commentCounter } = props;

  type TAction = {
    type: 'increment';
  };

  type TState = {
    comments: number;
  };

  const initialCommentState: TState = { comments: commentCounter };

  const reducer = (state: TState, action: TAction) => {
    switch (action.type) {
      case 'increment':
        return { comments: state.comments + 1 };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialCommentState);

  const increaseComments = () =>
    dispatch({
      type: 'increment',
    });

  return (
    <button
      type='button'
      className={styles.commentsButton}
      onClick={increaseComments}
    >
      <IconComment />
      <span className={styles.commentsNumber}>{state.comments}</span>
    </button>
  );
}
