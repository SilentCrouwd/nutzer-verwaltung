import { useContext, useEffect } from "react";
import UserCard from "../../components/userCard/UserCard";
import { UserContext, type user } from "../../hooks/userContext";
import "./overview.css";

function Overview() {
  const userArray = useContext(UserContext)?.userArray;

  return (
    <div className="overview__card-container">
      {userArray!.map((user: user) => {
        return (
          <UserCard
            key={user.id}
            UserId={user.id}
            UserName={user.Name}
            UserBirth={new Date(user.Birth).toLocaleDateString("de-DE")}
            UserGender={user.Gender}
            UserMail={user.Mail}
            UserLocate={user.Address}
            UserPicture={String(user.Img)}
            UserPhone={user.Phone}
            UserWeb={user.Web}
          ></UserCard>
        );
      })}
    </div>
  );
}
export default Overview;
