import "./createView.css";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import React, { useContext } from "react";
import { UserContext } from "../../hooks/useContext";
import { useNavigate } from "react-router-dom";
const FORM_FIELDS = [
  {
    id: "reg-name",
    name: "name",
    type: "text",
    placeholder: "Max Mustermann",
  },
  {
    id: "reg-birth",
    name: "birth",
    type: "date",
    autoComplete: "bday",
    required: true,
  },
  {
    id: "reg-mail",
    name: "mail",
    type: "email",
    autoComplete: "email",
    required: true,
    placeholder: "Max_Mustermann@aol.com",
  },

  {
    id: "reg-locate",
    name: "address",
    type: "text",
    autoComplete: "country-name",
    placeholder: "z.B. Berlin, Deutschland",
    required: true,
  },
  {
    id: "reg-phone",
    name: "phone",
    type: "tel",
    autoComplete: "tel",
    placeholder: "0151/22254569",
  },
  {
    id: "reg-web",
    name: "web",
    type: "url",
    placeholder: "https://example.com",
    required: true,
  },
  { id: "reg-picture", name: "img", type: "file", required: true },
];

function CreateView() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  if (!userContext) {
    return <p>Fehler: UserContext wurde nicht gefunden!</p>;
  }
  const { dispatch } = userContext;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = {
      id: Date.now(),
      name: formData.get("name") as string,
      birth: formData.get("birth") as string,
      mail: formData.get("mail") as string,
      gender: formData.get("gender") as string,
      locate: formData.get("address") as string,
      phone: formData.get("phone") as string,
      web: formData.get("web") as string,
      picture: formData.get("img") as string,
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
            gender
          </label>
          <select
            name="gender"
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
