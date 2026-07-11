import "./editView.css";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Inputfield from "../../components/input/InputField";
import { UserContext } from "../../hooks/useContext";
import { useContext, useEffect } from "react";
import type { User } from "../../hooks/useReducerCrud";

type RouteParams = {
  id: string;
};

const FORM_FIELDS = [
  { id: "reg-name", name: "name", type: "text" },
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
    id: "reg-locate",
    name: "address",
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
  { id: "reg-picture", name: "Img", type: "file", required: true },
];

function EditView() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) {
    return <p>Fehler: UserContext wurde nicht gefunden!</p>;
  }
  const { state, dispatch } = userContext;

  const { id } = useParams<RouteParams>();

  const selectedUser = state.users.find((user) => user.id === Number(id));

  if (!selectedUser) {
    return <p>User wurde nicht gefunden!</p>;
  }

  useEffect(() => {
    if (selectedUser) {
      dispatch({ type: "SET_EDIT_USER", payload: selectedUser });
    }
  }, [id, selectedUser, dispatch]);

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedUser = {
      ...selectedUser,
      id: selectedUser!.id,
      name: formData.get("name") as string,
      birth: formData.get("birth") as string,
      mail: formData.get("mail") as string,
      gender: formData.get("gender") as string,
      locate: formData.get("address") as string, // "address" im Formular wird zu "locate" im State
      phone: formData.get("phone") as string,
      web: formData.get("web") as string,
    };

    dispatch({ type: "UPDATE_USER", payload: updatedUser as User });
    navigate("/overview");
  }

  return (
    <div className="registration">
      <form className="registration-form" onSubmit={handleOnSubmit}>
        <h2 className="registration-form__title">Edit</h2>

        {FORM_FIELDS.map((field) => {
          const userKey =
            field.name === "address" ? "locate" : (field.name as keyof User);

          return (
            <div className="registration-form__field" key={field.id}>
              <Inputfield
                type={field.type}
                id={field.id}
                name={field.name}
                className="registration-form"
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                required={field.required}
                defaultValue={String(selectedUser[userKey] ?? "")}
              />
            </div>
          );
        })}
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

        <Button className="btn btn--submit" buttonName="Edit"></Button>
      </form>
    </div>
  );
}

export default EditView;
