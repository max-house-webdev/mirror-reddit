import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import styles from './Layout.scss';

import { Header, Main } from '../../components';
import { Error, Spinner } from '../../../utils/components';

import { store } from '../../store';
import { PostListPage, UnauthorizedPage, ActivePostPage } from '../../pages';
import { RecoilEnv, RecoilRoot } from 'recoil';

export function Layout() {
  //* recoil
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  return (
    <Provider store={store}>
      <div className={styles.layout}>
        <Header />
        <RecoilRoot>
          <Main>
            <Routes>
              <Route path='/' element={<UnauthorizedPage />} />
              <Route path='/auth' element={<Spinner />} />
              <Route path='posts' element={<PostListPage />} />
              <Route path='activePost/id/*' element={<ActivePostPage />} />
              <Route
                path='*'
                element={<Error errorMessage={'404 — страница не найдена'} />}
              />
            </Routes>
          </Main>
        </RecoilRoot>
      </div>
    </Provider>
  );
}
