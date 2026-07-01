import "./userCard.css";
import Button from "../button/Button";

interface UserCardProps {
  UserName: string;
  UserBirth: string;
  UserMail: string;
  UserGender: string;
  UserLocate: string;
  UserPhone: string;
  UserWeb: string;
  UserPicture: string;
}

function UserCard({
  UserName,
  UserBirth,
  UserGender,
  UserMail,
  UserLocate,
  UserPhone,
  UserWeb,
  UserPicture,
}: UserCardProps) {
  return (
    <div className="userCard">
      <div className="userCard__img-container">{UserPicture}</div>
      <div className="userCard__wrapper">
        <div className="userCard__main userCard__main--left">
          <h1 className="userCard__info userCard__info--name">{UserName}</h1>
          <p className="userCard__info userCard__info--birth">{UserBirth}</p>
          <p className="userCard__info userCard__info--gender">{UserGender}</p>
          <p className="userCard__info userCard__info--mail">{UserMail}</p>
        </div>
        <div className="userCard__main userCard__main--right">
          <Button className="btn btn__delete" buttonName="X"></Button>
          <p className="userCard__info userCard__info--locate">{UserLocate}</p>
          <p className="userCard__info userCard__info--phone">{UserPhone}</p>
          <p className="userCard__info userCard__info--web">{UserWeb}</p>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
