import { useEffect, useState } from 'react';

export function useIsMounted(dependencies = []) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [...dependencies]);

  return [isMounted];
}
