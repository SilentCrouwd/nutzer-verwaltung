import { createContext } from "react";

export type user = Record<string, string>;

interface UserContextType {
  userArray: user[];
  addUser: (newUser: user) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
