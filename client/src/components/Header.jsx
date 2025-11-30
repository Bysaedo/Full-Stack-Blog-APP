import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./Header.css";

const Header = ({ isDark, setIsDark }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const Toggle = ({ handleChange, isChecked }) => {
    return (
      <div className="toggle-container">
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
      </div>
    );
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link
          to="/"
          className="header-title"
        >
          <h1>My Blog</h1>
        </Link>
        <nav className="header-nav">
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
          {user ? (
            <>
              <span className="user-welcome">Hello, {user.name || "User"}</span>
              <button
                onClick={handleLogout}
                className="nav-button"
              >
                Logout
              </button>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark((prev) => !prev)}
              />
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="nav-link"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="nav-link"
              >
                Login
              </Link>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark((prev) => !prev)}
              />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
