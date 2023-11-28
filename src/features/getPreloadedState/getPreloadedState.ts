import { store } from '../../store';

import { saveToken } from '../auth';

export function getPreloadedState() {
  if (!window.__PRELOADED_STORE__) return;

  store.dispatch(saveToken(window.__PRELOADED_STORE__));

  const preloadedStoreScript = document.getElementById(
    'preloaded-store-script'
  );

  if (preloadedStoreScript) document.head.removeChild(preloadedStoreScript);

  delete window.__PRELOADED_STORE__;
}
