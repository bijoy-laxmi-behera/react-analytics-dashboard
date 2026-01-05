import "../styles/sidebar.css";
import logo from "../assets/logo.jpg";
import { FiStar, FiFileText, FiSettings } from "react-icons/fi";
import { IoIosAnalytics } from "react-icons/io";
import { AiFillLayout } from "react-icons/ai";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbLayersSelected } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* ICON RAIL */}
      <div className="sidebar-icons">
        <img src={logo} alt="Logo" className="sidebar-logo" />

        <div className="icon-group">
          <IoIosAnalytics />
          <AiFillLayout />
          <FiFileText />
          <MdKeyboardCommandKey />
          <TbLayersSelected />
        </div>

        <RiChatSmile2Line className="chat-icon" />
        <FiSettings className="settings-icon" />
      </div>

      {/* TEXT MENU */}
      <div className="sidebar-menu">
        <p className="brand-name">Codename.com</p>

        <p className="menu-title"><FiStar />Starred</p>
        <p className="menu-title"><FaArrowRotateLeft />Recent</p>

        <p className="menu-item active">Sales list</p>
        <p className="menu-item active">Goals</p>
        <p className="menu-item active">Dashboard</p>

        <div className="submenu">
          <p className="submenu-item">Codename</p>
          <p className="submenu-item">
            Cloudz3r <span className="badge">2</span>
          </p>
          <p className="submenu-item">Idioma</p>
          <p className="submenu-item">Syllibles</p>
          <p className="submenu-item">x-0b</p>
        </div>

        <p className="menu-title">Reports</p>
        <p className="menu-item">Share with me</p>
        <p className="menu-item">Deals by user</p>
        <p className="menu-item">Deal duration</p>

        <p className="menu-title">My reports</p>
        <p className="menu-item">Emails received</p>
        <p className="menu-item">Deal duration</p>
        <p className="menu-item danger">
          New report <span className="badge">7</span>
        </p>

        <div className="sidebar-footer">Manage folders</div>
      </div>
    </aside>
  );
}
