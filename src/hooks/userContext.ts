import { createContext } from "react";

export type user = {
  id: number;
} & Record<string, string | number>;

interface UserContextType {
  userArray?: user[];
  addUser?: (newUser: user) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);
