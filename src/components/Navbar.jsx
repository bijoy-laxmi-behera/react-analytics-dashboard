import "../styles/navbar.css";
import { IoIosSearch } from "react-icons/io";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* LEFT: Search */}
      <div className="navbar-left">
        <div className="search-wrapper">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="navbar-search"
          />
        </div>
      </div>

      {/* RIGHT: Actions */}
      <div className="navbar-right">
        <button className="icon-btn">
          <BsList />
        </button>

        <img
          src="https://i.pravatar.cc/36?img=5"
          alt="Profile"
          className="profile-img"
        />

        <button className="icon-btn add-btn">+</button>
      </div>
    </div>
  );
}
