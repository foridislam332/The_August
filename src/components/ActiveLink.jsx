import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? "inline-block lg:inline text-yellow text-[17px] p-2 font-medium border-b border-yellow duration-300"
                    : "inline-block lg:inline text-gray text-[17px] p-2 hover:text-yellow border-b border-transparent hover:border-yellow duration-300"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;