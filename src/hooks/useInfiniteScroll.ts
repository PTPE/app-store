import { useCallback, useRef } from "react";

type UseInfiniteScrollProps = {
  onIntersect: () => void;
  threshold?: number;
};

export function useInfiniteScroll({
  onIntersect,
  threshold,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeNode = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onIntersect?.();
          }
        },
        { threshold }
      );
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [onIntersect, threshold]
  );

  return { observeNode };
}
