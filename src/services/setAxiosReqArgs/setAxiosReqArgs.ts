interface IAxiosReqArgs {
  token: string;
  api?: string;
  params?: Record<string, unknown>;
}

export function setAxiosReqArgs(props: IAxiosReqArgs) {
  const { api, token, params } = props;

  const baseUrl = 'https://oauth.reddit.com';

  const url = api ? baseUrl.concat(api) : baseUrl;

  const headers = {
    Authorization: `bearer ${token}`,
  };

  const config = params ? { headers, params } : { headers };

  return {
    url,
    config,
  };
}
