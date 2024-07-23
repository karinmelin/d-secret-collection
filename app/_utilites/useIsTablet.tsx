import { useState, useEffect } from 'react';
import useWindowSize from './useWindowWidth';

type IsTabletProps = {
  isTablet: boolean;
};

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState<IsTabletProps>({ isTablet: false });
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    if (windowWidth) setIsTablet({ isTablet: windowWidth < 1024 });
  }, [windowWidth]);

  return isTablet;
};

export default useIsTablet;
