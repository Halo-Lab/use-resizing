import { useEffect, useState } from 'react';

export default function currentScreenSize(settings = { debounceTime: 200 }) {
    const [width, setWidth] = useState(getScreenSize());

    const resizeListener = () => {
        setWidth(getScreenSize());
    }

    const handler = debounce(resizeListener, settings.debounceTime);

    useEffect(()=>{
        window.addEventListener('resize', handler)

        return () => window.removeEventListener('resize', handler);
    }, [])

    return width;
}