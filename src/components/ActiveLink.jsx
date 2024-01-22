import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-xl bg-dark text-white hover:text-white hover:bg-dark text-center rounded-none py-2 px-4 flex justify-center items-center"
            : "text-xl hover:text-white hover:bg-dark rounded-none py-2 px-4 flex justify-center items-center"
        }
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;