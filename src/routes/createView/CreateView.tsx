import "./createView.css";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import React, { useContext } from "react";
import { UserContext } from "../../hooks/useContext";
import { useNavigate } from "react-router-dom";
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
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  if (!userContext) {
    return <p>Fehler: UserContext wurde nicht gefunden!</p>;
  }
  const { state, dispatch } = userContext;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      id: Date.now(),
      name: formData.get("Name") as string,
      birth: formData.get("Birth") as string,
      mail: formData.get("Mail") as string,
      gender: formData.get("Gender") as string,
      locate: formData.get("Address") as string,
      phone: formData.get("Phone") as string,
      web: formData.get("Web") as string,
      picture: formData.get("Img") as string,
    };
    dispatch({ type: "ADD_USER", payload: newUser });

    navigate("/overview");
  }
  return (
    <div className="registration">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="registration-form__title">Registrierung</h2>
        {FORM_FIELDS.map((field) => (
          <div className="registration-form__field" key={field.id}>
            <Inputfield
              type={field.type}
              id={field.id}
              name={field.name}
              className="registration-form"
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              required={field.required}
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
