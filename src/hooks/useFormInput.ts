import { useReducer, useState } from "react";
import { formInputReducer, initialState } from "./useFormInputReducer";

export function useHandleInput() {
  const [formInputState, dispatch] = useReducer(formInputReducer, initialState);
  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;

    dispatch({
      type: "ADD_INPUT",
      payload: {
        field: name as any,
        value: value,
      },
    });
  }

  function resetInputField() {
    dispatch({
      type: "RESET_FORM",
    });
  }

  return { values: formInputState, handleInputChange, resetInputField };
}
