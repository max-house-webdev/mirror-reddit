import { useRef, useEffect } from 'react';

export function useFocusWithRef<T extends HTMLElement>(defaultValue: T | null) {
  const ref = useRef<T>(defaultValue);

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  return ref;
}
