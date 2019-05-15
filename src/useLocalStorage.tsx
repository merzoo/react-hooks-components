import { useState, useEffect } from "react";

const useStateWithLocalStorage = (key: string) => {
  const [value, setValue] = useState<any>(localStorage.getItem(key) || "");

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useStateWithLocalStorage;
