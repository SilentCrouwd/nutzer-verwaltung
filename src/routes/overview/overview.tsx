import UserCard from "../../components/userCard/UserCard";
import EditView from "../editView/EditView";
import "./overview.css";
import { Link } from "react-router-dom";

function Overview() {
  const CardEl = document.querySelector(".userCard");

  return (
    <div>
      <Link to="/edit">
        <UserCard
          UserName="silent"
          UserBirth="07.05.1987"
          UserGender="male"
          UserMail="silent@Sil.com"
          UserLocate="Lauenstein"
          UserPicture="HierKommteinbild"
          UserPhone="0172/1195896"
          UserWeb="www.Silt.com"
        ></UserCard>
      </Link>
    </div>
  );
}
export default Overview;
