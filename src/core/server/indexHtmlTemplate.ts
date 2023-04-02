export const indexHtmlTemplate = (
  content: string,
  preloadedStore?: unknown
) => {
  const jsPath = '/static/client.js';

  const preloadedStoreScriptId = 'preloaded-store-script';

  const ReactRootElementId = 'react-root';

  const modalRootElementId = 'modal-root';

  const title = 'Mirror Reddit';

  const head = preloadedStore
    ? `<head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <script src="${jsPath}"></script>
          <script id=${preloadedStoreScriptId}>
            /* preloaded store */
            window.__PRELOADED_STORE__ = ${JSON.stringify(preloadedStore)}
          </script>
        </head>`
    : `<head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <script src="${jsPath}"></script>
      </head>`;

  const body = `<body>
                  <div id="${ReactRootElementId}">${content}</div>
                  <div id="${modalRootElementId}"></div>
                </body>`;

  return `<!DOCTYPE html>
            <html lang="ru">
              ${head}
              ${body}
            </html>`;
};
