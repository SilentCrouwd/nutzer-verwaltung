import { useContext, useEffect, useState } from "react";
import UserCard from "../../components/userCard/UserCard";
import { useGetLocalStorage } from "../../hooks/useLocalStorage";
import type { user } from "../../hooks/userContext";
import "./overview.css";
import { RenderContext } from "../../hooks/useRenderContext";

function Overview() {
  const { handleGetLocalStorage } = useGetLocalStorage();
  const [users, setUsers] = useState<user[]>([]);
  const { render } = useContext(RenderContext);
  useEffect(() => {
    const storedUsers = handleGetLocalStorage();
    setUsers(storedUsers);
  }, [render]);
  return (
    <div className="overview__card-container">
      {users.map((user: user, index: number) => {
        return (
          <UserCard
            key={index}
            UserId={index}
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
