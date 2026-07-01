import { Outlet, Link } from "react-router-dom";
import "./overview.css";
import Button from "../../components/button/Button";
import UserCard from "../../components/userCard/UserCard";
function Overview() {
  return (
    <div className="overview">
      <div className="sidebar">
        <div className="sidebar__header">
          <h1>Nutzerverwaltung</h1>
        </div>
        <div className="sidebar__body">
          <Link to="">
            <Button className="btn" buttonName="Overview"></Button>
          </Link>
          <Link to="create">
            <Button className="btn" buttonName="Create"></Button>
          </Link>
        </div>
      </div>

      <div>
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
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Overview;
