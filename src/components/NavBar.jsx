import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/a'>OtherPage</NavLink>
    </ul>
  );
};

export default NavBar;