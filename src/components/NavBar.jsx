import { NavLink } from "react-router-dom";
import { allUrlsArr } from "../utils/internalUrls";

const navLinksMapping = allUrlsArr.map(({ name, path }) => {
  return (
    <NavLink style={ { margin: '0.5em' } } key={ name } to={ path }>{ name }</NavLink>
  );
});
const NavBar = () => {
  return (
    <>
      <ul style={ { margin: '0', padding: '0', display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-evenly' } }>
        { navLinksMapping }
      </ul>
    </>
  );
};

export default NavBar;