import { NavLink } from "react-router";

const MyLink = ({ to, className = "", children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `text-purple-500 font-semibold ${className}`
          : `text-gray-700 font-semibold hover:text-purple-400 ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
