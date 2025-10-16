import { Link } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./Mycontainer";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100 py-2 border-b border-slate-300">
      <MyContainer>
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-[55px]" />
          </div>

          {/* Center: Nav Links */}
          <div className="flex-grow flex justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <MyLink to="/">Home</MyLink>
              </li>
              <li>
                <MyLink to="/about">About Us</MyLink>
              </li>
              <li>
                <MyLink to="/profile">Profile</MyLink>
              </li>
            </ul>
          </div>

          {/* Right: Sign In */}
          <div className="flex-shrink-0">
            <Link
              to="/signin"
              className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-600 transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
