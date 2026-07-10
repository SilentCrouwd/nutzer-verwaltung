export interface User {
  id: number;
  name: string;
  birth: string;
  gender: string;
  locate: string;
  phone: string;
  web: string;
  picture: string;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;
}

export const initialUserState: UserState = {
  users: (() => {
    const rawStoredData = localStorage.getItem("User"); // Exakt dein LOCAL_STORAGE_KEY
    if (!rawStoredData || rawStoredData === "undefined") {
      return [];
    }
    return JSON.parse(rawStoredData);
  })(),
  selectedUser: null,
};

export type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "DELETE_USER"; payload: number }
  | { type: "SET_EDIT_USER"; payload: User | null }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "RESET_LIST" };

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((currUser) => currUser.id !== action.payload),
      };

    case "SET_EDIT_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((currUser) =>
          currUser.id === action.payload.id ? action.payload : currUser,
        ),
        selectedUser: null,
      };

    case "RESET_LIST":
      return {
        users: [],
        selectedUser: null,
      };

    default:
      return state;
  }
}
