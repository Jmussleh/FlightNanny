import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout, loggedIn, getProfile } from "../../utils/auth";
import { BiSolidPlaneAlt } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();

  const logoutAction = (event) => {
    event.preventDefault();
    navigate("/")
    logout();


  };
  return (
    
    <header className="header">
      <nav className="navbar px-4">
      <BiSolidPlaneAlt style={{color: 'white', fontSize: '50px'}}/>
      {/* <img src="../../app-logo.png" width="100px"/> */}
        <div>
          <Link className="Title" to="/">
            <h1 className="">FlightNanny</h1>
          </Link>
        </div>
        <div className="">
          {loggedIn() ? (
            <>
              <Link className="navButton" to="/me">
                {getProfile().data.username}'s profile
              </Link>
              <button className="navButton" onClick={logoutAction}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="navButton" to="/">
                Login
              </Link>
            </>
          )}
        </div>
     </nav>
    </header>
  );
};

export default Header;
