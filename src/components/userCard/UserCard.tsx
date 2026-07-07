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

import { useSetLocalStorage } from "../../hooks/useLocalStorage";
import { useContext } from "react";
import { RenderContext } from "../../hooks/useRenderContext";
import { UserContext } from "../../hooks/userContext";

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
}: Readonly<UserCardProps>) {
  const { handleLocalStorage } = useSetLocalStorage();
  const userArray = useContext(UserContext)?.userArray;
  const { render, setRender } = useContext(RenderContext);
  function handleDeleteUser(currId: number) {
    console.log(currId);
    userArray!.splice(currId, 1);
    handleLocalStorage(userArray ?? []);

    setRender!(!render);
  }

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
            onClick={() => {
              handleDeleteUser(UserId);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
