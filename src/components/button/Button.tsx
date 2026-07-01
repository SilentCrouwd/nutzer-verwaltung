import "./button.css";

interface buttonProps {
  className: string;
  buttonName: string;
}

function Button({ className, buttonName }: buttonProps) {
  return <button className={className}>{buttonName}</button>;
}
export default Button;
