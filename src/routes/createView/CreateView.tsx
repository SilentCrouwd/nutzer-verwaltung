import "./createView.css";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import { useHandleInput } from "../../hooks/useFormInput";
import type React from "react";

import { useContext } from "react";
import { UserContext, type user } from "../../hooks/userContext";
const FORM_FIELDS = [
  { id: "reg-name", name: "Name", type: "text" },
  {
    id: "reg-birth",
    name: "Birth",
    type: "date",
    autoComplete: "bday",
    required: true,
  },
  {
    id: "reg-mail",
    name: "Mail",
    type: "email",
    autoComplete: "email",
    required: true,
  },

  {
    id: "reg-locate",
    name: "Address",
    type: "text",
    autoComplete: "country-name",
    placeholder: "z.B. Berlin, Deutschland",
    required: true,
  },
  { id: "reg-phone", name: "Phone", type: "tel", autoComplete: "tel" },
  {
    id: "reg-web",
    name: "Web",
    type: "url",
    placeholder: "https://example.com",
    required: true,
  },
  { id: "reg-picture", name: "Img", type: "file", required: true },
];

function CreateView() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Etwas ist schief gelaufen ");
  }
  const { addUser } = context;
  const { values, handleInputChange, resetInputField } = useHandleInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser!(values as user);
    resetInputField();

    alert("User add to Storage");
  };

  return (
    <div className="registration">
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <h2 className="registration-form__title">Registrierung</h2>
        {FORM_FIELDS.map((field) => (
          <div className="registration-form__field" key={field.id}>
            <Inputfield
              type={field.type}
              id={field.id}
              name={field.name}
              value={values[field.name] || ""}
              className="registration-form"
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              required={field.required}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <div className="registration-form__field">
          {" "}
          <label htmlFor="reg-gender" className="registration-form__label">
            Gender
          </label>
          <select
            name="Gender"
            id="reg-gender"
            className="registration-form__input"
            value={values["Gender"] || ""}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              -- Bitte wählen --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Undefined">Undefined</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button className="btn btn--submit" buttonName="Registrieren"></Button>
      </form>
    </div>
  );
}

export default CreateView;
