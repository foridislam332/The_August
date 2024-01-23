import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaHouseFlag } from "react-icons/fa6";


const Header = () => {

    const icons = (
      <>
        <ul className="flex gap-2 md:gap-4 lg:gap-10 text-xl">
          <li>
            <Link>
              <FaHouseFlag />
            </Link>
          </li>
          <li>
            <Link>
              <CiHeart />
            </Link>
          </li>
          <li>
            <Link>
              <FaRegUser />
            </Link>
          </li>
          <li>
            <Link>
              <FiShoppingCart />
            </Link>
          </li>
        </ul>
      </>
    );
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            <NavItems></NavItems>
          </ul>
        </div>
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavItems></NavItems>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">The August</Link>
        </div>

        <div className="navbar-end">{icons}</div>
      </div>
    );
};

export default Header;