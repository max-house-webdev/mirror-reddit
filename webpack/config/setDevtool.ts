import { isDev } from './setMode';

export const setDevtool = () => {
  return isDev() ? 'eval' : false;
};
