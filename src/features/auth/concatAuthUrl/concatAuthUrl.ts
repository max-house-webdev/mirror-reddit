import type { TProcessEnvState } from '../../processEnv/processEnvSlice';

export function concatAuthUrl(args: TProcessEnvState) {
  const { client_id, redirect_uri } = args;

  const baseUrl = 'https://www.reddit.com';
  const api = '/api/v1/authorize';

  const response_type = 'code';
  const RANDOM_STRING = 'rndstring';

  const duration = { temp: 'temporary', perm: 'permanent' };
  const scope = 'read submit identity';

  return `${baseUrl}${api}?client_id=${client_id}&response_type=${response_type}&state=${RANDOM_STRING}&redirect_uri=${redirect_uri}&duration=${duration.perm}&scope=${scope}`;
}
