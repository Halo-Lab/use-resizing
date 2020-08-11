import { useEffect, useState } from 'react';

function debounce(callback, waitTime) {
  let timeNow = Date.now();
  return () => {
    if (timeNow - Date.now() + waitTime < 0) {
      callback();
      timeNow = Date.now();
    }
  };
}

const getScreenSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export default function useResizeWidth() {
  const [screenSize, setScreenSize] = useState(null);
  const handleSetWidth = () => setScreenSize(getScreenSize());
  useEffect(() => {
    handleSetWidth();
    const handler = debounce(handleSetWidth, 200);

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return screenSize;
}
