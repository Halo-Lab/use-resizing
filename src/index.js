import { useEffect, useState } from "react";
import debounce from "./utils/debounce";
import getSize from "./utils/getSize";

export default function useResize(settings = { debounceTime: 100 }) {
  const [screenSize, setScreenSize] = useState(getSize());

  const handleSetSize = () => {
    setScreenSize(getSize());
  };

  const handler = debounce(handleSetSize, settings.debounceTime);

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);
  return screenSize;
}
