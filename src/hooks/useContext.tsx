import { createContext } from "react";
import type { UserAction, UserState } from "./useReducerCrud";

interface UserContextType {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
