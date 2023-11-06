import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 34px;
`;

export const NavLink = styled.p`
  cursor: pointer;
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162.5%;
`;
