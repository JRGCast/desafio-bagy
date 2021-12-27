import { NavLink } from "react-router-dom";
import { allUrlsArr } from "../utils/internalUrls";

const navLinksMapping = allUrlsArr.map(({ name, path }) => {
  return (
    <NavLink key={ name } to={ path }>{ name }</NavLink>
  );
});
const NavBar = () => {
  return (
    <>
      <ul>
        { navLinksMapping }
      </ul>
    </>
  );
};

export default NavBar;