import logo from "../../assets/images/logo.webp";
import {
  BurgerButton,
  BurgerMenu,
  BurgerMenuWrapper,
  Line,
  Nav,
  NavLink,
  NavLinkMobile,
  NavList,
  NavMobileList,
} from "./Header.styled";
import { Link } from "react-scroll";
import sprite from "../../assets/images/sprite.svg";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    console.log("object");
    setIsOpen(true);
  };
  return (
    <>
      <BurgerMenuWrapper
        id="wrapper"
        onClick={(e) => {
          if (e.target.id === "wrapper") {
            closeModal();
          }
        }}
        className={isOpen ? "visible" : "header-animation"}
      >
        <BurgerMenu id="menu">
          <BurgerButton type="button" onClick={closeModal}>
            <svg width={46} height={46}>
              <use href={sprite + "#icon-close"}></use>
            </svg>
          </BurgerButton>
          <NavMobileList>
            <li className="wow animate__animated animate__fadeInRight">
              <Link
                to="traffic"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeModal}
              >
                <NavLinkMobile>
                  траф<span className="ukrainianWordMedium">і</span>к
                </NavLinkMobile>
              </Link>
            </li>
            <Line></Line>
            <li>
              <Link
                to="we-can"
                spy={true}
                smooth={true}
                duration={450}
                onClick={closeModal}
              >
                <NavLinkMobile>ми можемо</NavLinkMobile>
              </Link>
            </li>
            <Line></Line>
            <li>
              <Link
                to="clients"
                spy={true}
                smooth={true}
                duration={600}
                onClick={closeModal}
              >
                <NavLinkMobile>
                  кл<span className="ukrainianWordMedium">іє</span>нти
                </NavLinkMobile>
              </Link>
            </li>
            <Line></Line>
            <li>
              <Link
                to="partners"
                spy={true}
                smooth={true}
                duration={750}
                onClick={closeModal}
              >
                <NavLinkMobile>партнери</NavLinkMobile>
              </Link>
            </li>
            <Line></Line>
            <li>
              <Link
                to="for-clients"
                spy={true}
                smooth={true}
                duration={850}
                onClick={closeModal}
              >
                <NavLinkMobile>
                  для кл<span className="ukrainianWordMedium">іє</span>нт
                  <span className="ukrainianWordMedium">і</span>в
                </NavLinkMobile>
              </Link>
            </li>
          </NavMobileList>
        </BurgerMenu>
      </BurgerMenuWrapper>
      <Nav>
        <div>
          <img
            src={logo}
            alt="logotype axioma partners"
            width={"147px"}
            height={"64.3px"}
          />
        </div>
        <BurgerButton type="button" onClick={openModal}>
          <svg width={46} height={46}>
            <use href={sprite + "#icon-open"}></use>
          </svg>
        </BurgerButton>
        <NavList>
          <li>
            <Link to="traffic" spy={true} smooth={true} duration={400}>
              <NavLink>
                траф<span className="ukrainianWordMedium">і</span>к
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="we-can" spy={true} smooth={true} duration={650}>
              <NavLink>ми можемо</NavLink>
            </Link>
          </li>
          <li>
            <Link to="clients" spy={true} smooth={true} duration={800}>
              <NavLink>
                кл<span className="ukrainianWordMedium">іє</span>нти
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="partners" spy={true} smooth={true} duration={900}>
              <NavLink>партнери</NavLink>
            </Link>
          </li>
          <li>
            <Link to="for-clients" spy={true} smooth={true} duration={900}>
              <NavLink>
                для кл<span className="ukrainianWordMedium">іє</span>нт
                <span className="ukrainianWordMedium">і</span>в
              </NavLink>
            </Link>
          </li>
        </NavList>
      </Nav>
    </>
  );
};
