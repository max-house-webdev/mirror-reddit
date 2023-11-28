export const setMode = () => {
  if (process.env.NODE_ENV === 'development') return 'development';

  if (process.env.NODE_ENV === 'none') return 'none';

  return 'production';
};

export const isDev = () => {
  return process.env.NODE_ENV === 'development';
};

export const isProd = () => {
  return process.env.NODE_ENV === 'production';
};
