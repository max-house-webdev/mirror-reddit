import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { getPreloadedState } from '../../features/getPreloadedState';

window.addEventListener('load', () => {
  const ReactRootElementId = 'react-root';

  const ReactRootElement = document.getElementById(ReactRootElementId);

  getPreloadedState();

  ReactDOM.hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    ReactRootElement
  );
});
