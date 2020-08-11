import { useEffect, useState } from 'react';
import debounce from './utils/debounce';

function debounce(callback, waitTime) {
  let timeNow = Date.now();
  return () => {
    if (timeNow - Date.now() + waitTime < 0) {
      callback();
      timeNow = Date.now();
    }
  };
}

const getWidth = () => window.innerWidth;

export default function useResizeWidth() {
  const [width, setWidth] = useState(null);
  const handleSetWidth = () => setWidth(getWidth());
  useEffect(() => {
    handleSetWidth();
    const handler = debounce(handleSetWidth, 200);

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}