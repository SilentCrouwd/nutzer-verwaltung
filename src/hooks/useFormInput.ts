import { useState } from "react";

export function useHandleInput() {
  const [values, setValues] = useState<Record<string, string>>({});

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function resetInputField() {
    setValues({});
  }

  return { values, setValues, handleInputChange, resetInputField };
}
