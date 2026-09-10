import { useCallback, useSyncExternalStore } from "react";

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const result = matchMedia(query);
      result.addEventListener("change", onChange);
      return () => result.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    // No `matchMedia` on the server (or while hydrating): report "no match".
    () => false
  );
}

export default useMediaQuery;
