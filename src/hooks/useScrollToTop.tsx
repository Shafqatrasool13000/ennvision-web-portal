import { useEffect } from "react";

const useScrollToTop = (): void => {
  console.log("useScrollCalled");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
};

export default useScrollToTop;
