import { Link } from "react-router-dom";
import NavItems from "../components/NavItems";

// react icons

const Header = () => {
    return (
        <header className="sticky top-0 duration-300 ease-in-out shadow-lg shadow-yellow/10 backdrop-blur-md z-50">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* department */}
                    {/* man, woman, kids */}
                    <div></div>

                    {/* logo */}
                    <Link to="/" className="w-28">
                        {/* <img className="w-full" src={Logo} alt="" /> */}
                    </Link>

                    {/* users and icons */}
                    <div></div>
                </div>

                {/* menu and search bar */}
                <nav>
                    {/* nav items */}
                    <ul className="hidden lg:flex items-center gap-5">
                        <NavItems />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;