import { useRef, useEffect, useState } from 'react';
export function useIntervalCount(delay: number) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  useEffect(() => {
    countRef.current = count;
  });
  useEffect(() => {
    let id = setInterval(() => {
      setCount(countRef.current + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
  return count;
}
