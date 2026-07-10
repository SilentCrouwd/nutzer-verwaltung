import { useContext } from "react";
import UserCard from "../../components/userCard/UserCard";
import "./overview.css";
import { UserContext } from "../../hooks/useContext";

function Overview() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    return "hier is was falsch gelaufen";
  }
  const { state, dispatch } = userContext;

  return (
    <div className="overview__card-container">
      {state.users.map((user: any) => {
        return (
          <UserCard
            key={user.id}
            UserId={user.id}
            UserName={user.name}
            UserBirth={new Date(user.birth).toLocaleDateString("de-DE")}
            UserGender={user.gender}
            UserMail={user.mail}
            UserLocate={user.locate}
            UserPicture={String(user.picture)}
            UserPhone={user.phone}
            UserWeb={user.web}
            onDelete={() => dispatch({ type: "DELETE_USER", payload: user.id })}
          ></UserCard>
        );
      })}
    </div>
  );
}
export default Overview;
