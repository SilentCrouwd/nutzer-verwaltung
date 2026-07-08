import type { user } from "./userContext";

const LOCAL_STORAGE_KEY = "User";

export function useSetLocalStorage() {
  function handleLocalStorage(dataObj: user[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
  }
  return { handleLocalStorage };
}

export function useGetLocalStorage() {
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
