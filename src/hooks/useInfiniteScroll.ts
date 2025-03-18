import { useCallback, useRef } from "react";

type UseInfiniteScrollProps = {
  onIntersect: () => void;
};

export function useInfiniteScroll({ onIntersect }: UseInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeNode = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onIntersect?.();
        }
      });
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [onIntersect]
  );

  return { observeNode };
}
