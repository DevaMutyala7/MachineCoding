import { useState, useEffect } from "react";
// import useThrottle from "./useThrottling";

export default function useResponsive() {
  const [device, setDevice] = useState({
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    handler();
  }, []);

  const handler = () => {
    const width = window.innerWidth;

    const isMobile = width <= 768;
    const isTablet = width > 768 && width < 990;
    const isDesktop = width > 990;

    setDevice({ isDesktop, isMobile, isTablet });
  };
  // const throttledHandler = useThrottle(handler, 100);

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
}
