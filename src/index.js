import { useEffect, useState } from 'react';

import getScreenSize from './src/utils/getScreenSize';
import debounce from './src/utils/debounce';

export default function currentScreenSize(settings = { debounceTime: 200 }) {
    const [width, setWidth] = useState(getScreenSize());

    const resizeListener = () => {
        setWidth(getScreenSize());
    }

    console.log('render')

    const handler = debounce(resizeListener, settings.debounceTime);

    useEffect(()=>{
        window.addEventListener('resize', handler)

        return () => window.removeEventListener('resize', handler);
    }, [])

    return width;
}