import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    // for setting LocalStoarge everytime when state changes

    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state,setState];
};

export default useLocalStorage;