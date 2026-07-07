interface InputProps {
  id?: string;
  className: string;
  type: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Inputfield({
  id,
  className,
  type,
  name,
  value,
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
        value={value}
        name={name}
        className={`${className}__input`}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
export default Inputfield;
