import logo from "../../assets/images/logo.webp";
import { Nav, NavLink, NavList } from "./Header.styled";

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
          <NavLink href="#traffic">трафік</NavLink>
        </li>
        <li>
          <NavLink href="#clients">клієнти</NavLink>
        </li>
        <li>
          <NavLink href="#partners">партнери</NavLink>
        </li>
        <li>
          <NavLink href="#we-can">ми можемо</NavLink>
        </li>
        <li>
          <NavLink href="#for-clients">для клiєнтiв</NavLink>
        </li>
      </NavList>
    </Nav>
  );
};
