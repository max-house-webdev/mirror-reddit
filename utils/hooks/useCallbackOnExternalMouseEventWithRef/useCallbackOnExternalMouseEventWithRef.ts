import { useRef, useEffect } from 'react';

type TMouseEvent = 'click' | 'dblclick';

export function useCallbackOnMouseClickWithRef(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseEvent: TMouseEvent = 'click';

  useEffect(() => {
    const handle = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener(mouseEvent, handle);

    return () => {
      document.removeEventListener(mouseEvent, handle);
    };
  }, [callback]);

  return [ref];
}

export function useCallbackOnMouseDbClickWithRef(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseEvent: TMouseEvent = 'dblclick';

  useEffect(() => {
    const handle = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener(mouseEvent, handle);

    return () => {
      document.removeEventListener(mouseEvent, handle);
    };
  }, [callback]);

  return [ref];
}
