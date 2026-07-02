import "./editView.css";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";

const FORM_FIELDS = [
  { id: "reg-name", name: "Name", type: "text" },
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
  },
  {
    id: "reg-gender",
    name: "gender",
    type: "text",
    placeholder: "z.B. Weiblich, Männlich, Divers...",
    required: true,
  },
  {
    id: "reg-locate",
    name: "locate",
    type: "text",
    autoComplete: "country-name",
    placeholder: "z.B. Berlin, Deutschland",
  },
  { id: "reg-phone", name: "phone", type: "tel", autoComplete: "tel" },
  {
    id: "reg-web",
    name: "web",
    type: "url",
    placeholder: "https://example.com",
  },
  { id: "reg-picture", name: "picture", type: "file" },
];

function EditView() {
  return (
    <div className="registration">
      <form className="registration-form" noValidate>
        <h2 className="registration-form__title">Edit</h2>

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

        {/* Submit Button */}
        <Button className="btn btn--submit" buttonName="Edit"></Button>
      </form>
    </div>
  );
}

export default EditView;
