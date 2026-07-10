import type { User } from "./useReducerCrud";

const LOCAL_STORAGE_KEY = "User";

export function useSetLocalStorage() {
  function handleLocalStorage(dataObj: User[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
  }
  return { handleLocalStorage };
}
