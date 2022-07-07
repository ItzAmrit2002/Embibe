/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const { auth, setAuth } = useAuth();


  const navigate = useNavigate();
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>Embibe</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/admin">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>

          <a onClick={() => {
            console.log(auth.admin)
            navigate("/createpaper")
          }}>Create Paper</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>

          <a onClick={() => {
            console.log(auth.admin)
            navigate("/addquestion")
          }}>Add Questions</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a onClick={() => {
            console.log(auth.admin)
            navigate("/stats")
          }}>Student Statistics</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a onClick={() => {
            console.log(auth.admin)
            navigate("/viewpaper")
          }}>View Paper</a>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contracts</a>
        </div> */}

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a onClick={() => {
            setAuth({});
            localStorage.removeItem("token_embibe");
            navigate("/login");
            console.log("logout called")
          }}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;