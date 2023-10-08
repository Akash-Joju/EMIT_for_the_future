import React, { useContext, useState} from "react"; // Import useEffect here
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import AVTR1 from '../image/emit.jpg';

export default function TopBar({ posts }) {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

const toggleDropdown = () => {
  setShowDropdown(!showDropdown);
};


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };



  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <div className="iconContainer">
            <img
              src={AVTR1}
              alt="Alwin George"
              className="iconImg"
              onClick={toggleDropdown} // Add onClick event to toggle the dropdown
            />
            <ul className={`dropdownMenu ${showDropdown ? 'show' : ''}`}>
              <li>
                <a href="https://lpdaac.usgs.gov/data/get-started-data/collection-overview/missions/emit-overview/#introduction">
                  <span className="menuItem">
                    EMIT-introduction
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://lpdaac.usgs.gov/data/get-started-data/collection-overview/missions/emit-overview/#emit-temporal-and-spatial-resolution">
                  <span className="menuItem">
                  EMIT Temporal and Spatial Resolution
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="https://lpdaac.usgs.gov/data/get-started-data/collection-overview/missions/emit-overview/#emit-tools-and-services">
                  <span className="menuItem">
                  EMIT Tools and Services
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="https://earth.jpl.nasa.gov/emit/data/data-portal/coverage-and-forecasts/">
                  <span className="menuItem">
                  The EMIT Open Data Portal
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://earth.jpl.nasa.gov/emit/science/objectives/">
                  <span className="menuItem">
                    Science Behind EMIT
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="https://www.youtube.com/watch?v=Z8ItLZinpcA">
                  <span className="menuItem">
                    EMIT launching Video
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=4ltjpSgQAjo">
                  <span className="menuItem">
                    EMIT installation Animation
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="https://www.youtube.com/watch?v=XzSEqdiS2aE">
                  <span className="menuItem">
                    EMIT tutorial series workshop
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=z9RjGdfxSDk">
                  <span className="menuItem">
                  What Is NASA’s Earth Surface Mineral Dust Source Investigation (EMIT)? video lesson
                    <span className="outline"></span>
                  </span>
                </a>
              </li>
              <li className="divider"></li>
             
              <li className="divider"></li>
    {/* Add more menu items as needed */}
  </ul>
</div>
  <li className="iconContainer">
    <Link className="link" to="/">
      <span className="menuText">HOME</span>
    </Link>
  </li>
          <li className="iconContainer">
            <Link className="link" to="/about">
              <span className="menuText" >ABOUT</span>
            </Link>
          </li>
          <li className="iconContainer">
            <Link className="link" to="/contact">
              <span className="menuText">CONTACT</span>
            </Link>
          </li>
          <li className="iconContainer">
            <Link className="link" to="/write">
              <span className="menuText">WRITE</span>
            </Link>
          </li>         
          <li className="iconContainer">
            <Link className="link name" to="/link">
              <span className="menuText">LINKS</span>
            </Link>
          </li>
          {user ? (
            <li className="iconContainer">
              <div className="dropdown">
                <div
                  className="dropdownButton"
                  onClick={toggleMenu}
                  onTouchStart={toggleMenu}
                >
                  {user && <span>{user.username}</span>}
                  <i className="fas fa-chevron-down"></i>
                </div>
                {showMenu && (
  <ul className="dropdownMenu" onClick={closeMenu}>
    <li className="iconContainer">
      <Link to="/settings" className="link">
        <b className="menuItem">Profile</b>
      </Link>
    </li>
    <hr className="divider" /> {/* Add the divider */}
    <li onClick={handleLogout} className="iconContainer">
      <b className="menuItem">Logout</b>
    </li>
  </ul>
)}
              </div>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="iconContainer">
              <Link className="link" to="/login">
                <b className="menuText" > LOGIN</b>
              </Link>
            </li>
            <li className="iconContainer">
              <Link className="link" to="/register">
                <b className="menuText" > REGISTER</b>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
