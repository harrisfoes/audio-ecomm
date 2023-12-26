import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the location changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency on pathname ensures the effect runs when the route changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
