import { Outlet, Link } from "react-router-dom";
import "./root.css";
import Button from "../../components/button/Button";

function Root() {
  return (
    <div className="root-container">
      <div className="sidebar">
        <div className="sidebar__header">
          <h1>Nutzerverwaltung</h1>
        </div>
        <div className="sidebar__body">
          <Link  to="overview">
            <Button className="btn" buttonName="Overview"></Button>
          </Link>
          <Link to="create">
            <Button className="btn" buttonName="Create"></Button>
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default Root;
