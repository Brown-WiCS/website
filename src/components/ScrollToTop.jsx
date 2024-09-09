import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      let isMounted = true;
  
      // Scroll to the top if the component is still mounted
      if (isMounted) {
        window.scrollTo({
            top: 0, left: 0});
      }
  
      // Cleanup function to handle unmounting
      return () => {
        isMounted = false;
      };
    }, [pathname]); // Effect runs when the route changes (pathname)
  
    return null;
  };
  
  export default ScrollToTop;