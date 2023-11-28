import { atom } from 'recoil';

export type TCommentValueState = {
  error: 'commentValueState error';
  [key: string]: string;
};

const defaultState: TCommentValueState = {
  error: 'commentValueState error',
};

export const commentValueState = atom({
  key: 'commentValueState',
  default: defaultState,
});
