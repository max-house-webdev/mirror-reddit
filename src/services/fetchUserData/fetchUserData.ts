import axios, { AxiosError } from 'axios';
import {
  requestFailed,
  requestSuccess,
  sendRequest,
} from '../../features/request/requestSlice';
import { store } from '../../store';
import { setAxiosReqArgs } from '../setAxiosReqArgs';
import { TUserData, saveUserData } from '../../features/auth/authSlice';

export interface IFetchUSerDataArgs {
  token: string;
}

export async function fetchUserData(args: IFetchUSerDataArgs) {
  const { token } = args;

  try {
    store.dispatch(sendRequest('user data'));

    const { url, config } = setAxiosReqArgs({
      token,
      api: '/api/v1/me',
    });
    // request for user data
    const response = await axios.get(url, config);
    const { status } = response;
    if (status === 200) {
      store.dispatch(requestSuccess());

      const { data } = response;
      const { name, icon_img } = data;
      const userData: TUserData = {
        name,
        avatar: icon_img,
      };

      store.dispatch(saveUserData(userData));
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch(requestFailed(err.toString()));
    } else {
      store.dispatch(requestFailed('Unknown error type occurred'));
    }
  }
}
