import { useState, useEffect } from 'react';
import useWindowSize from './useWindowWidth';

type IsMobileProps = {
  isMobile: boolean;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<IsMobileProps>({ isMobile: false });
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    if (windowWidth) setIsMobile({ isMobile: windowWidth < 768 });
  }, [windowWidth]);

  return isMobile;
};

export default useIsMobile;
