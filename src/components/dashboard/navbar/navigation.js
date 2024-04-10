import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const isLogin = false;
  const navigate = useNavigate();

  const handleOnSignupClick = (e) => {
    navigate("/signup");
  };

  return (
    <div className="navbar bg-base-100 " data-theme="dracula">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">T-Gen</Link>
      </div>
      <div className="flex-none">
        {isLogin ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button className="btn btn-ghost" onClick={(e)=>handleOnSignupClick(e)}>
              Login/Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
