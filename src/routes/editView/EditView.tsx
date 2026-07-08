import "./editView.css";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import { useSetLocalStorage } from "../../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { useHandleInput } from "../../hooks/useFormInput";
import { UserContext, type user } from "../../hooks/userContext";
import { RenderContext } from "../../hooks/useRenderContext";

type RouteParams = {
  id: string;
};

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
    type: "text",
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
];

function EditView() {
  const { id } = useParams<RouteParams>();
  const userArray = useContext(UserContext)?.userArray;
  const { values, setValues, handleInputChange } = useHandleInput();
  const { handleLocalStorage } = useSetLocalStorage();
  const { render, setRender } = useContext(RenderContext);
  const addUser = useContext(UserContext)?.addUser;
  useEffect(() => {
    if (userArray && userArray.length > 0) {
      const foundUser = userArray.find((arrEL) => arrEL.id === Number(id));

      if (foundUser) {
        setValues(foundUser);
      }
    }
  }, []);

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedUsers = userArray?.map((currUser) =>
      currUser.id === Number(id) ? (values as user) : currUser,
    );

    handleLocalStorage(updatedUsers ?? []);
    addUser?.(values as user);
    setRender!(!render);
  }

  return (
    <div className="registration">
      <form className="registration-form" noValidate onSubmit={handleOnSubmit}>
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
              value={values[field.name]}
              onChange={handleInputChange}
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
