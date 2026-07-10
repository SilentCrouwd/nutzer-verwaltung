import "./userCard.css";
import Button from "../button/Button";
import { AiFillCalendar } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import random from "../../assets/Random.jpeg";
import { Link } from "react-router-dom";

interface UserCardProps {
  UserName: string;
  UserBirth: string;
  UserMail: string;
  UserGender: string;
  UserLocate: string;
  UserPhone: string;
  UserWeb: string;
  UserPicture: string;
  UserId: number;
  onDelete: () => void;
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
  UserId,
  onDelete,
}: Readonly<UserCardProps>) {
  return (
    <div className="userCard" data-id={UserId}>
      <div className="userCard__img-container">
        <img src={random} alt={UserPicture} />
      </div>
      <div className="userCard__wrapper">
        <Link className="userCard__link" to={`/edit/${UserId}`}>
          <div className="userCard__main userCard__main--left">
            <h1 className="userCard__info userCard__info--name">{UserName}</h1>

            <p className="userCard__info userCard__info--birth">
              <AiFillCalendar />
              {UserBirth}
            </p>
            <p className="userCard__info userCard__info--gender">
              <AiFillAndroid />
              {UserGender}
            </p>
            <p className="userCard__info userCard__info--mail">
              <IoMail />
              {UserMail}
            </p>
          </div>

          <div className="userCard__main userCard__main--right">
            <p className="userCard__info userCard__info--locate">
              <FaHouseUser />
              {UserLocate}
            </p>
            <p className="userCard__info userCard__info--phone">
              <MdOutlineSmartphone />
              {UserPhone}
            </p>
            <p className="userCard__info userCard__info--web">
              <TbWorldWww />
              {UserWeb}
            </p>
          </div>
        </Link>
        <div className="userCard__btn-container">
          <Button
            className="btn btn__delete"
            buttonName="X"
            onClick={onDelete}
          ></Button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
