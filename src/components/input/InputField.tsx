interface InputProps {
  label?: string;
  id?: string;
  className: string;
  type: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

function Inputfield({
  id,
  className,
  type,
  name,
  placeholder,
  autoComplete,
  required,
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className={`${className}__label`}>
        {name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={`${className}__input`}
        autoComplete={autoComplete}
        required={required}
      />
    </>
  );
}
export default Inputfield;
