import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-xl bg-dark text-white text-center rounded py-2 px-4 flex justify-center items-center"
            : "text-xl py-2 px-4 flex justify-center items-center"
        }
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;