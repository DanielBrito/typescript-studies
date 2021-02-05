import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<Theme> = [Theme, Dispatch<SetStateAction<Theme>>];

function usePersistedState<Theme>(
  key: string,
  initialState: Theme
): Response<Theme> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
