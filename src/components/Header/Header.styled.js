import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import mobileBg from "../../assets/images/mobileBg.png";

export const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;

  @media screen and (max-width: 481px) {
    padding-top: 24px;
  }
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
  gap: 30px;
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
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%;
`;

export const BurgerMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: end;

  z-index: 11;

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const NavLinkMobile = styled.p`
  color: #fff;
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 24px;
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

export const BurgerMenu = styled.div`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  // max-width: 353px;
  width: 65vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 45px 45px 0 0;
  align-items: end;
  gap: 30px;
  z-index: 15;

  @media screen and (min-width: 481px) {
    display: none;
  }

  @media screen and (max-width: 380px) {
    padding: 45px 28px 0 0;
  }

  @media screen and (max-width: 341px) {
    padding: 45px 22px 0 0;
  }
`;

export const Line = styled.li`
  width: 146px;
  height: 1px;
  background-color: #5a5a5a;
`;

export const LanguageWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 6px;
  user-select: none;
`;

export const LanguagesThumb = styled.div`
  position: absolute;
  bottom: -80%;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: right;
  z-index: 3;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
`;

export const LanguageText = styled.p`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162.5%;
  cursor: pointer;
`;

export const MobileLanguagesWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 155;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  width: 115%;
  padding: 22px 32px;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(22, 21, 22, 0.9);
`;

export const MobileLanguagesText = styled.p`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 81.25%;
`;
