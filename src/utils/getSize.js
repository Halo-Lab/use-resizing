const getSize = () => {
  if (window) {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  if (globalThis) {
    return { width: globalThis.innerWidth, height: globalThis.innerHeight };
  }
  return null;
};

export default getSize;
