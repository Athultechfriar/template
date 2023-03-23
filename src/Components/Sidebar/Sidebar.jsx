import Logo from "../../Logo/logo/logo-icon.svg";
import Icons from "../Icons/Icons";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import "./Sidebar.css";
import "../CustomDropDown/CustomDropDown.css";
import CustomDropDown from "../CustomDropDown/CustomDropDown";
import avatar from "../../Public/Images/profile-1.jpg";
import { Link } from "react-router-dom";
import { Notifications } from "../Notifications/Notifications";
import { Menu } from "antd";

export const Sidebar = () => {
  const menu = (
    <Menu
      className="ProfileDropDownMenu"
      items={[
        {
          key: "1",
          label: (
            <Link to="/profile">
              <a className="d-flex align-items-center">
                <span className="d-flex me-2">{Icons.Person}</span>
                <span className="fw-500">Profile settings</span>
              </a>
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to="/admin-settings">
              <a className="d-flex align-items-center">
                <span className="d-flex me-2">{Icons.UserSettings}</span>
                <span className="fw-500">Admin settings</span>
              </a>
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link to="/signin">
              <a className="d-flex align-items-center">
                <span className="d-flex me-2">{Icons.SignOut}</span>
                <span className="fw-500">Sign out</span>
              </a>
            </Link>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <aside className="aside">
        <div className="logoWrapper">
          <Link to="/">
            <a className="logoInner">
              <img src={Logo} alt="GrandPMS" />
            </a>
          </Link>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarMenuTop">
            <SidebarMenu />
          </div>
          <div className="sidebarMenuBottom">
            <Notifications />
            <div className="sidebarProfile">
              <CustomDropDown
                placement="topLeft"
                dropdownMenu={menu}
                element={
                  <img
                    src={avatar}
                    width={36}
                    height={36}
                    alt="Profile Name"
                    objectFit="cover"
                  />
                }
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
