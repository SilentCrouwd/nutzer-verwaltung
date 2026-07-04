import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "User";

export function useSetLocalStorage() {
  function handleLocalStorage(dataObj: Record<string, string>[]) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataObj));
  }
  return { handleLocalStorage };
}
