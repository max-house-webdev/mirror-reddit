import { atom } from 'recoil';
import type { ICommentProps } from '../../components/smart/Comment';

const defaultState = {
  user: [] as ICommentProps[],
  list: [] as ICommentProps[],
};

export const commentListState = atom({
  key: 'commentList',
  default: defaultState,
});
