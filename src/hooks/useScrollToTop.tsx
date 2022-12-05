import { useEffect } from "react";

const useScrollToTop = (): void => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
};

export default useScrollToTop;
