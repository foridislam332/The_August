import ActiveLink from "./ActiveLink";

const NavItems = () => {
  return (
    <>
      <li>
        <ActiveLink to="/men">Men</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/women">Women</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/kids">Kids</ActiveLink>
      </li>
    </>
  );
};

export default NavItems;
