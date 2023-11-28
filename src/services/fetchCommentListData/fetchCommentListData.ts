import axios, { AxiosError } from 'axios';
import { setAxiosReqArgs } from '../../services';
import { store } from '../../store';
import {
  requestFailed,
  requestSuccess,
  sendRequest,
  getComments,
} from '../../features';

interface IFetchCommentListData {
  token: string;
  postId: string;
  subreddit: string;
}

export async function fetchCommentListData(args: IFetchCommentListData) {
  const { token, postId, subreddit } = args;

  try {
    store.dispatch(sendRequest('comments'));

    const params = { sr_detail: true };

    const { url, config } = setAxiosReqArgs({
      token,
      api: `/r/${subreddit}/comments/${postId}`,
      params,
    });

    const response = await axios.get(url, config);
    const { status } = response;

    if (status === 200) {
      store.dispatch(requestSuccess());

      const data = response.data;

      const comments = getComments(data);

      return comments;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch(requestFailed(err.toString()));
    } else {
      store.dispatch(requestFailed('Unknown error type occurred'));
    }
  }
}
