import { useReducer } from "react";

// 1. Dein Interface für den Zustand
export interface FormInputs {
  Name: string;
  Birth: string;
  Mail: string;
  Address: string;
  Phone: string;
  Web: string;
  Img: string;
  Gender: string;
}

type FormAction =
  | {
      type: "ADD_INPUT";
      payload: { field: string; value: string | number };
    }
  | { type: "RESET_FORM" }
  | {
      type: "SET_FORMDATA";
      payload: Partial<FormInputs>; // <-- HIER: TypeScript diese Action beibringen!
    };
export const initialState: FormInputs = {
  Name: "",
  Birth: "",
  Mail: "",
  Address: "",
  Phone: "",
  Web: "",
  Img: "",
  Gender: "",
};

export function formInputReducer(
  state: FormInputs,
  action: FormAction,
): FormInputs {
  switch (action.type) {
    case "ADD_INPUT":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "RESET_FORM":
      return initialState;

    case "SET_FORMDATA":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
