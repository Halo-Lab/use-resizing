import { useEffect, useState } from 'react';

import getScreenSize from './src/utils/getScreenSize';
import debounce from './src/utils/debounce';

const currentScreenSize = (settings = { debounceTime: 200 }) => {
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const handleResize = () => setScreenSize(getScreenSize());
  const handleResizeDebounced = debounce(handleResize, settings.debounceTime);

  useEffect(() => {
    window.addEventListener('resize', handleResizeDebounced);

    console.log('hello');

    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
    };
  }, []);

  return {
    width: screenSize.width,
    height: screenSize.height,
  };
};

export default currentScreenSize;
