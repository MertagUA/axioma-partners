import logo from "../../assets/images/logo.webp";
import { Nav, NavLink, NavList } from "./Header.styled";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <Nav>
      <div>
        <img
          src={logo}
          alt="logotype axioma partners"
          width={"147px"}
          height={"64.3px"}
        />
      </div>
      <NavList>
        <li>
          <Link to="traffic" spy={true} smooth={true} duration={400}>
            <NavLink>трафік</NavLink>
          </Link>
        </li>
        <li>
          <Link to="we-can" spy={true} smooth={true} duration={650}>
            <NavLink>ми можемо</NavLink>
          </Link>
        </li>
        <li>
          <Link to="clients" spy={true} smooth={true} duration={800}>
            <NavLink>клієнти</NavLink>
          </Link>
        </li>
        <li>
          <Link to="partners" spy={true} smooth={true} duration={900}>
            <NavLink>партнери</NavLink>
          </Link>
        </li>
        <li>
          <Link to="for-clients" spy={true} smooth={true} duration={900}>
            <NavLink>для клiєнтiв</NavLink>
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};
