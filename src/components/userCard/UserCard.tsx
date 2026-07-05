import "./userCard.css";
import Button from "../button/Button";
import { AiFillCalendar } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import random from "../../assets/Random.jpeg";

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
      <div className="userCard__img-container">
        <img src={random} alt={UserPicture} />
      </div>
      <div className="userCard__wrapper">
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
        <div className="userCard__btn-container">
          <Button className="btn btn__delete" buttonName="X"></Button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
