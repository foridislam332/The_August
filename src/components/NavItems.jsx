import ActiveLink from "./ActiveLink";

const NavItems = () => {
    return (
        <>
            <li>
                <ActiveLink to='/'>
                    Home
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/about'>
                    About
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/blogs'>
                    Blogs
                </ActiveLink>
            </li>
            <li>
                <ActiveLink to='/contact'>
                    Contact
                </ActiveLink>
            </li>
        </>
    );
};

export default NavItems;