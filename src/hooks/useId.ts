import { useEffect, useLayoutEffect, useState } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

let i = 0;

export default function useId(): string {
  const [id, setId] = useState('');
  useIsomorphicLayoutEffect(() => setId(`i${i++}`), []);
  return id;
}
