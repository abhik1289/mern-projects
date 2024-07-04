import { useEffect, RefObject } from "react";
 
type ClickHandler = (event?: MouseEvent | TouchEvent) => void;
 
export default function useClickOutside(
  ref: any,
  fun: ClickHandler
) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      fun(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
 
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, fun]);
}