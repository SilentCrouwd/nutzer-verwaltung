interface InputProps {
  label?: string;
  id?: string;
  className: string;
  type: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Inputfield({
  id,
  className,
  type,
  name,
  placeholder,
  autoComplete,
  required,
  onChange,
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
        onChange={onChange}
      />
    </>
  );
}
export default Inputfield;
