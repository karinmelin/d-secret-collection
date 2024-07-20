import { useState, useEffect } from "react";

type WindowSize = {
  windowWidth: number | undefined;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ windowWidth: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
