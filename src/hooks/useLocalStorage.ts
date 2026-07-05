import { useEffect, useState } from "react";
import type { user } from "./userContext";

const LOCAL_STORAGE_KEY = "User";

export function useSetLocalStorage() {
  function handleLocalStorage(dataObj: Record<string, string>[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
  }
  return { handleLocalStorage };
}

export function useGetLocalStorage() {
  const [userArray, setUserArray] = useState<any[]>([]);
  function handleGetLocalStorage() {
    const rawStoredData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!rawStoredData || rawStoredData === "undefined") {
      return [];
    }
    const storedUserData = JSON.parse(rawStoredData);
    return storedUserData;
  }
  return { handleGetLocalStorage };
}
