import { useCallback, useEffect } from "react";
const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = useCallback((e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback?.();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
