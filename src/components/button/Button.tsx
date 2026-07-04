import "./button.css";

interface buttonProps {
  className: string;
  buttonName: string;
  onClick?: () => void;
}

function Button({ className, buttonName, onClick }: buttonProps) {
  return (
    <button className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}
export default Button;
