import "./createView.css";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import { formReducer } from "../../hooks/useFormInput";
import { useReducer } from "react";
import type { FormState } from "../../hooks/useFormInput";


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
    id: "reg-gender",
    name: "Gender",
    type: "select",
    placeholder: "z.B. Weiblich, Männlich, Divers...",
    required: true,
  },
  {
    id: "reg-locate",
    name: "Address",
    type: "text",
    autoComplete: "country-name",
    placeholder: "z.B. Berlin, Deutschland",
  },
  { id: "reg-phone", name: "Phone", type: "tel", autoComplete: "tel" },
  {
    id: "reg-web",
    name: "Web",
    type: "url",
    placeholder: "https://example.com",
  },
  { id: "reg-picture", name: "Img", type: "file" },
];
const initialState: FormState = {
  Mail: "",
  Birth: "",
  Gender: "",
  Web: "",
  Phone: "",
  Name: "",
  Address: "",
  Img: "",
};
function CreateView() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name as keyof FormState,
      value: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <div className="registration">
      <form className="registration-form" noValidate>
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
              onChange={handleChange}
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
            onChange={handleChange}
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
