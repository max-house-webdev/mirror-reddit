import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Layout } from '../../components';

function AppComponent() {
  return (
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  );
}

export const App = hot(AppComponent);
