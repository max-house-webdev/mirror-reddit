import axios, { AxiosError } from 'axios';
import { setAxiosReqArgs } from '../../services';

import {
  requestFailed,
  requestSuccess,
  sendRequest,
  getPosts,
  updatePostList,
} from './../../features';

import { store } from '../../store';

export interface IFetchPostListDataArgs {
  token: string;
  limit: number | null;
  after: string | null;
}

export async function fetchPostListData(args: IFetchPostListDataArgs) {
  const { token, limit, after } = args;

  try {
    store.dispatch(sendRequest('posts'));

    const params = { sr_detail: true, limit, after };

    const { url, config } = setAxiosReqArgs({
      token,
      api: '/best.json',
      params,
    });

    const response = await axios.get(url, config);
    const { status } = response;

    if (status === 200) {
      store.dispatch(requestSuccess());

      const postListData = response.data.data;

      const after = postListData.after;
      const limit = postListData.children.length;
      const data = getPosts(postListData.children);

      store.dispatch(updatePostList({ after, limit, data }));
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch(requestFailed(err.toString()));
    } else {
      store.dispatch(requestFailed('Unknown error type occurred'));
    }
  }
}
