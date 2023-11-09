import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import mobileBg from "../../assets/images/mobileBg.png";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 34px;

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const NavMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: transparent;
  @media screen and (min-width: 481px) {
    display: none;
  }
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

export const NavLinkMobile = styled.p`
  color: #fff;
  font-family: "Axiforma";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 81.25%;
  text-align: end;

  @media screen and (max-width: 380px) {
    font-size: 30px;
  }

  @media screen and (max-width: 341px) {
    font-size: 28px;
  }
`;

export const BurgerMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;

  z-index: 1200;
  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 353px;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 60px 45px 0 0;
  align-items: end;
  gap: 45px;
  z-index: 1201;
  @media screen and (min-width: 481px) {
    display: none;
  }

  @media screen and (max-width: 380px) {
    padding: 60px 28px 0 0;
  }

  @media screen and (max-width: 341px) {
    padding: 60px 22px 0 0;
  }
`;

export const Line = styled.li`
  width: 196px;
  height: 1px;
  background-color: #5a5a5a;
`;
