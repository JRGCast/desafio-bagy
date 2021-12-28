import { NavLink, useParams } from "react-router-dom";
import '../sass/main.scss';
import { allUrlsArr } from "../utils/internalUrls";

const NavBar = () => {
  const { id } = useParams();
  const navLinksMapping = allUrlsArr.map(({ name, path, icon }) => {
    return (
      <NavLink className='NavBar-navLink' key={ name } to={ `/logged/${id}${path}` }>{ icon }{ " " }{ name }</NavLink>
    );
  });
  return (
    <nav className="NavBar-wrapper">
      <aside className="NavBar-header-wrapper">
        <h2>Dashboard</h2>
        <img className="NavBar-img" src='https://site.bagy.com.br/wp-content/uploads/2021/02/logo-1.png' alt='bagy-logo' />
      </aside>
      <ul className="NavBar-links-wrapper">
        { navLinksMapping }
      </ul>
    </nav>
  );
};

export default NavBar;