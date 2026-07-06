import UserCard from "../../components/userCard/UserCard";
import { useGetLocalStorage } from "../../hooks/useLocalStorage";
import type { user } from "../../hooks/userContext";
import "./overview.css";
import { Link } from "react-router-dom";

function Overview() {
  const { handleGetLocalStorage } = useGetLocalStorage();
  const storedUsers = handleGetLocalStorage();
  console.log(storedUsers);

  return (
    <div className="overview__card-container">
      {storedUsers.map((user: user) => {
        return (
          <UserCard
            key={user.id}
            UserName={user.Name}
            UserBirth={new Date(user.Birth).toLocaleDateString("de-DE")}
            UserGender={user.Gender}
            UserMail={user.Mail}
            UserLocate={user.Address}
            UserPicture={user.Img}
            UserPhone={user.Phone}
            UserWeb={user.Web}
          ></UserCard>
        );
      })}
    </div>
  );
}
export default Overview;
