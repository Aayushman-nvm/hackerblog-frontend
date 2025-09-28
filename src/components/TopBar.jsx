import { Link } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import "./TopBar.css";

const TopBar = () => {
  const { userProfile, clearUserProfile } = useMyContext();

  const handleLogout = () => {
    clearUserProfile();
    // Add any additional logout logic here if needed
  };

  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="topbar-brand">
          <Link to="/" className="brand-link">
            <h1 className="brand-title website-title">HackerBlog</h1>
          </Link>
        </div>

        <nav className="topbar-nav">
          {userProfile ? (
            <div className="nav-user">
              <span className="user-welcome">
                Welcome, {userProfile.name || "User"}!
              </span>
              <button
                onClick={handleLogout}
                className="nav-button logout-button"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="nav-button login-button">
                LOGIN
              </Link>
              <Link to="/register" className="nav-button register-button">
                SIGN UP
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
