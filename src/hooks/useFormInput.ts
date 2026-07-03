export interface FormState {
  Mail: string;
  Birth: string;
  Gender: string;
  Web: string;
  Phone: string;
  Name: string;
  Address: string;
  Img: string;
}
type FormAction =
  | { type: "CHANGE_INPUT"; field: keyof FormState; value: string }
  | { type: "RESET_FORM"; payload: FormState };

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    // Und im Reducer-Switch:
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
}
