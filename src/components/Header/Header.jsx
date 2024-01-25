import logo from "../../assets/images/logo.webp";
import {
  BurgerButton,
  BurgerMenu,
  BurgerMenuWrapper,
  LanguageText,
  LanguageWrapper,
  LanguagesThumb,
  Line,
  MobileLanguagesText,
  MobileLanguagesWrapper,
  Nav,
  NavLink,
  NavLinkMobile,
  NavList,
  NavMobileList,
} from "./Header.styled";
import { Link } from "react-scroll";
import sprite from "../../assets/images/sprite.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = ({ changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMobileLanguages, setShowMobileLanguages] = useState(false);

  const { t, i18n } = useTranslation();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <BurgerMenuWrapper
        id="wrapper"
        onClick={(e) => {
          if (e.target.id === "wrapper") {
            closeModal();
            setShowMobileLanguages(false);
          }
        }}
        className={isOpen ? "visible" : "header-animation"}
      >
        <BurgerMenu
          id="menu"
          className={isOpen ? "displayNone" : ""}
          onClick={(e) => {
            if (e.target.id === "menu") {
              setShowMobileLanguages(false);
            }
          }}
        >
          <BurgerButton type="button" onClick={closeModal}>
            <svg width={46} height={46}>
              <use href={sprite + "#icon-close"}></use>
            </svg>
          </BurgerButton>
          <NavMobileList>
            <li
              style={{ position: "relative" }}
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="0.2s"
            >
              <NavLinkMobile>
                <LanguageWrapper
                  onClick={() => {
                    setShowMobileLanguages(true);
                    closeModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                  >
                    <path
                      d="M11.9937 21.793L11.9578 21.7872C11.9628 21.7911 11.9687 21.7937 11.975 21.7947C11.9813 21.7957 11.9877 21.7951 11.9937 21.793ZM20.165 8.93549C20.1548 8.88129 20.1267 8.83206 20.0853 8.79563C20.0439 8.7592 19.9915 8.73764 19.9364 8.73439C19.8813 8.73114 19.8268 8.74638 19.7813 8.77768C19.7359 8.80899 19.7023 8.85457 19.6857 8.90719C19.6698 8.95715 19.6386 9.0008 19.5964 9.03187C19.5541 9.06294 19.5032 9.07984 19.4508 9.08014H18.7558C18.7108 9.08018 18.6667 9.06791 18.6282 9.04465L17.6229 8.4418C17.5844 8.41854 17.5403 8.40627 17.4953 8.40631H15.8871C15.8382 8.40626 15.7903 8.4208 15.7496 8.44809L13.7663 9.77014C13.7321 9.79297 13.704 9.82398 13.6847 9.86037C13.6654 9.89676 13.6555 9.93739 13.6558 9.97858V11.8536C13.6558 11.8986 13.668 11.9427 13.6911 11.9812C13.7142 12.0197 13.7473 12.0513 13.787 12.0724L16.3875 13.4605C16.4266 13.4815 16.4594 13.5126 16.4824 13.5505C16.5055 13.5884 16.518 13.6317 16.5187 13.6761L16.5308 14.7313C16.5315 14.775 16.5437 14.8177 16.5662 14.8552C16.5887 14.8927 16.6206 14.9235 16.6589 14.9447L17.7037 15.5228C17.7425 15.5443 17.7747 15.5758 17.7972 15.6139C17.8198 15.6521 17.8317 15.6955 17.8318 15.7398V17.923C17.8318 17.9707 17.8456 18.0174 17.8714 18.0575C17.8973 18.0976 17.9342 18.1293 17.9777 18.149C18.0212 18.1686 18.0694 18.1753 18.1166 18.1682C18.1638 18.1611 18.2079 18.1405 18.2437 18.109C18.6651 17.7379 19.2693 17.1962 19.3497 17.0722C19.4827 16.8664 19.6074 16.6558 19.7239 16.4401C19.9651 15.9934 20.1695 15.5276 20.3348 15.0476C20.9044 13.3985 20.4543 10.4341 20.165 8.93549ZM12.8652 14.1024L10.1102 12.036C10.0791 12.0127 10.0412 12.0001 10.0023 12.0001H8.69512C8.67276 12.0001 8.65061 11.9957 8.62995 11.9871C8.60929 11.9786 8.59052 11.966 8.57473 11.9502L7.9584 11.3339C7.9417 11.3172 7.92188 11.304 7.90006 11.2949C7.87825 11.2859 7.85487 11.2813 7.83127 11.2813H5.44187C5.4082 11.2813 5.37528 11.2713 5.34728 11.2526C5.31928 11.2339 5.29746 11.2073 5.28458 11.1762C5.27169 11.1451 5.26832 11.1109 5.27489 11.0778C5.28146 11.0448 5.29767 11.0145 5.32148 10.9907L5.69973 10.6124C5.71552 10.5966 5.73429 10.584 5.75495 10.5755C5.77561 10.5669 5.79776 10.5625 5.82012 10.5626H7.27424C7.35256 10.5626 7.42873 10.537 7.49117 10.4897C7.55361 10.4424 7.59889 10.376 7.62014 10.3007L7.92965 9.20008C7.93625 9.17643 7.94762 9.15438 7.96308 9.1353C7.97853 9.11621 7.99773 9.1005 8.01949 9.08912L9.2535 8.45393C9.28126 8.43958 9.30454 8.41786 9.32079 8.39116C9.33703 8.36446 9.34561 8.3338 9.34559 8.30254V7.74102C9.34564 7.70618 9.35629 7.67218 9.37613 7.64354L10.032 6.69928C10.0517 6.67091 10.0796 6.64927 10.112 6.63729L11.0297 6.29274C11.0622 6.28057 11.0902 6.25878 11.1099 6.23028C11.1296 6.20178 11.1402 6.16794 11.1402 6.13326V5.62115C11.1402 5.59307 11.1333 5.56543 11.12 5.54067C11.1068 5.51591 11.0877 5.49479 11.0643 5.4792L10.1443 4.86737C10.119 4.85074 10.0898 4.84106 10.0596 4.83933C10.0294 4.83759 9.99926 4.84386 9.97225 4.85748L8.71982 5.48369C8.69117 5.49784 8.65911 5.50362 8.62733 5.50036C8.59554 5.4971 8.56532 5.48494 8.54014 5.46528L7.94627 4.99584C7.926 4.97954 7.90973 4.95883 7.89869 4.93528C7.88765 4.91174 7.88214 4.88598 7.88257 4.85998C7.88301 4.83397 7.88937 4.80842 7.90119 4.78525C7.91301 4.76208 7.92996 4.74192 7.95076 4.72631L8.43322 4.37098C8.45506 4.35496 8.47276 4.33395 8.48482 4.3097C8.49689 4.28544 8.50298 4.25866 8.50258 4.23158C8.50218 4.20449 8.49531 4.1779 8.48255 4.15401C8.46978 4.13012 8.45148 4.10963 8.42918 4.09426L7.67764 3.57002C7.65162 3.5517 7.62098 3.54107 7.58921 3.53932C7.55744 3.53757 7.52582 3.54479 7.49795 3.56014C7.22617 3.70883 6.42881 4.14906 6.1458 4.34717C4.83637 5.26543 3.78258 6.50228 3.08393 7.94092C3.00217 8.10983 2.90109 8.28188 2.89121 8.4674C2.88133 8.65293 2.73578 9.06711 2.67514 9.23467C2.66696 9.25732 2.66369 9.28145 2.66555 9.30546C2.6674 9.32947 2.67435 9.35281 2.68592 9.37393L4.28918 12.3199C4.30361 12.3467 4.32503 12.369 4.35117 12.3846L6.03799 13.3971C6.05987 13.4102 6.07854 13.428 6.09262 13.4492C6.10669 13.4704 6.11581 13.4945 6.1193 13.5198L6.45711 15.9698C6.46041 15.9933 6.46854 16.0158 6.48099 16.036C6.49344 16.0562 6.50993 16.0736 6.52943 16.0871L7.84564 16.9918C7.88377 17.018 7.91032 17.0579 7.91977 17.1032L8.61785 20.4184C8.62176 20.4379 8.62922 20.4565 8.63986 20.4732C8.70545 20.5792 8.96689 20.9674 9.28225 21.0249C9.25305 21.033 9.22699 21.0514 9.19779 21.0599C9.27354 21.0732 9.34852 21.0906 9.4224 21.112C9.51225 21.1363 9.60209 21.1569 9.69193 21.1763C9.83254 21.2041 9.84646 21.2257 9.91385 21.1008C10.0037 20.9337 10.1066 20.8762 10.1834 20.8555C10.2151 20.8482 10.2441 20.8321 10.267 20.8091C10.29 20.786 10.306 20.757 10.3132 20.7252L10.7656 18.6283C10.7751 18.5843 10.8007 18.5455 10.8374 18.5196L12.8589 17.0866C12.8824 17.0699 12.9016 17.0479 12.9148 17.0224C12.928 16.9968 12.9349 16.9684 12.9348 16.9397V14.2462C12.9351 14.2184 12.929 14.1911 12.9169 14.1661C12.9048 14.1412 12.8871 14.1194 12.8652 14.1024Z"
                      fill="white"
                    />
                    <path
                      d="M11.5 3.73438C13.4123 3.73422 15.2655 4.39713 16.7438 5.61017C18.2222 6.8232 19.2341 8.5113 19.6074 10.3868C19.9806 12.2624 19.6919 14.2093 18.7906 15.8958C17.8893 17.5824 16.431 18.9043 14.6643 19.6362C12.8977 20.3681 10.9318 20.4649 9.10184 19.9099C7.27184 19.3549 5.69089 18.1825 4.62837 16.5926C3.56585 15.0026 3.08749 13.0934 3.27481 11.1903C3.46213 9.28723 4.30354 7.50795 5.65566 6.15566C6.4213 5.38565 7.33208 4.77516 8.33527 4.35955C9.33846 3.94393 10.4141 3.73144 11.5 3.73438ZM11.5 1.9375C5.94316 1.9375 1.4375 6.44316 1.4375 12C1.4375 17.5568 5.94316 22.0625 11.5 22.0625C17.0568 22.0625 21.5625 17.5568 21.5625 12C21.5625 6.44316 17.0568 1.9375 11.5 1.9375Z"
                      fill="white"
                    />
                  </svg>
                  {t("headerLanguage")}
                </LanguageWrapper>
              </NavLinkMobile>
            </li>
            <Line className={isOpen ? "" : "displayHidden"}></Line>
            <li
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="0.2s"
            >
              <Link
                to="traffic"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeModal}
              >
                <NavLinkMobile>{t("headerTraffic")}</NavLinkMobile>
              </Link>
            </li>
            <Line className={isOpen ? "" : "displayHidden"}></Line>
            <li
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="0.4s"
            >
              <Link
                to="we-can"
                spy={true}
                smooth={true}
                duration={450}
                onClick={closeModal}
              >
                <NavLinkMobile>{t("headerWeCan")}</NavLinkMobile>
              </Link>
            </li>
            <Line className={isOpen ? "" : "displayHidden"}></Line>
            <li
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="0.6s"
            >
              <Link
                to="clients"
                spy={true}
                smooth={true}
                duration={600}
                onClick={closeModal}
              >
                <NavLinkMobile>{t("headerClients")}</NavLinkMobile>
              </Link>
            </li>
            <Line className={isOpen ? "" : "displayHidden"}></Line>
            <li
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="0.8s"
            >
              <Link
                to="partners"
                spy={true}
                smooth={true}
                duration={750}
                onClick={closeModal}
              >
                <NavLinkMobile>{t("headerPartners")}</NavLinkMobile>
              </Link>
            </li>
            <Line className={isOpen ? "" : "displayHidden"}></Line>
            <li
              className={
                isOpen
                  ? "wow animate__animated animate__fadeInRight"
                  : "wow animate__animated animate__fadeInRight displayHidden"
              }
              data-wow-delay="1s"
            >
              <Link
                to="for-clients"
                spy={true}
                smooth={true}
                duration={850}
                onClick={closeModal}
              >
                <NavLinkMobile>{t("headerForClients")}</NavLinkMobile>
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
              <NavLink>{t("headerTraffic")}</NavLink>
            </Link>
          </li>
          <li>
            <Link to="we-can" spy={true} smooth={true} duration={650}>
              <NavLink>{t("headerWeCan")}</NavLink>
            </Link>
          </li>
          <li>
            <Link to="clients" spy={true} smooth={true} duration={800}>
              <NavLink>{t("headerClients")}</NavLink>
            </Link>
          </li>
          <li>
            <Link to="partners" spy={true} smooth={true} duration={900}>
              <NavLink>{t("headerPartners")}</NavLink>
            </Link>
          </li>
          <li>
            <Link to="for-clients" spy={true} smooth={true} duration={900}>
              <NavLink>{t("headerForClients")}</NavLink>
            </Link>
          </li>
          <li>
            <NavLink>
              <LanguageWrapper
                onClick={() => {
                  setShowLanguages((prevState) => !prevState);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <path
                    d="M11.9937 21.793L11.9578 21.7872C11.9628 21.7911 11.9687 21.7937 11.975 21.7947C11.9813 21.7957 11.9877 21.7951 11.9937 21.793ZM20.165 8.93549C20.1548 8.88129 20.1267 8.83206 20.0853 8.79563C20.0439 8.7592 19.9915 8.73764 19.9364 8.73439C19.8813 8.73114 19.8268 8.74638 19.7813 8.77768C19.7359 8.80899 19.7023 8.85457 19.6857 8.90719C19.6698 8.95715 19.6386 9.0008 19.5964 9.03187C19.5541 9.06294 19.5032 9.07984 19.4508 9.08014H18.7558C18.7108 9.08018 18.6667 9.06791 18.6282 9.04465L17.6229 8.4418C17.5844 8.41854 17.5403 8.40627 17.4953 8.40631H15.8871C15.8382 8.40626 15.7903 8.4208 15.7496 8.44809L13.7663 9.77014C13.7321 9.79297 13.704 9.82398 13.6847 9.86037C13.6654 9.89676 13.6555 9.93739 13.6558 9.97858V11.8536C13.6558 11.8986 13.668 11.9427 13.6911 11.9812C13.7142 12.0197 13.7473 12.0513 13.787 12.0724L16.3875 13.4605C16.4266 13.4815 16.4594 13.5126 16.4824 13.5505C16.5055 13.5884 16.518 13.6317 16.5187 13.6761L16.5308 14.7313C16.5315 14.775 16.5437 14.8177 16.5662 14.8552C16.5887 14.8927 16.6206 14.9235 16.6589 14.9447L17.7037 15.5228C17.7425 15.5443 17.7747 15.5758 17.7972 15.6139C17.8198 15.6521 17.8317 15.6955 17.8318 15.7398V17.923C17.8318 17.9707 17.8456 18.0174 17.8714 18.0575C17.8973 18.0976 17.9342 18.1293 17.9777 18.149C18.0212 18.1686 18.0694 18.1753 18.1166 18.1682C18.1638 18.1611 18.2079 18.1405 18.2437 18.109C18.6651 17.7379 19.2693 17.1962 19.3497 17.0722C19.4827 16.8664 19.6074 16.6558 19.7239 16.4401C19.9651 15.9934 20.1695 15.5276 20.3348 15.0476C20.9044 13.3985 20.4543 10.4341 20.165 8.93549ZM12.8652 14.1024L10.1102 12.036C10.0791 12.0127 10.0412 12.0001 10.0023 12.0001H8.69512C8.67276 12.0001 8.65061 11.9957 8.62995 11.9871C8.60929 11.9786 8.59052 11.966 8.57473 11.9502L7.9584 11.3339C7.9417 11.3172 7.92188 11.304 7.90006 11.2949C7.87825 11.2859 7.85487 11.2813 7.83127 11.2813H5.44187C5.4082 11.2813 5.37528 11.2713 5.34728 11.2526C5.31928 11.2339 5.29746 11.2073 5.28458 11.1762C5.27169 11.1451 5.26832 11.1109 5.27489 11.0778C5.28146 11.0448 5.29767 11.0145 5.32148 10.9907L5.69973 10.6124C5.71552 10.5966 5.73429 10.584 5.75495 10.5755C5.77561 10.5669 5.79776 10.5625 5.82012 10.5626H7.27424C7.35256 10.5626 7.42873 10.537 7.49117 10.4897C7.55361 10.4424 7.59889 10.376 7.62014 10.3007L7.92965 9.20008C7.93625 9.17643 7.94762 9.15438 7.96308 9.1353C7.97853 9.11621 7.99773 9.1005 8.01949 9.08912L9.2535 8.45393C9.28126 8.43958 9.30454 8.41786 9.32079 8.39116C9.33703 8.36446 9.34561 8.3338 9.34559 8.30254V7.74102C9.34564 7.70618 9.35629 7.67218 9.37613 7.64354L10.032 6.69928C10.0517 6.67091 10.0796 6.64927 10.112 6.63729L11.0297 6.29274C11.0622 6.28057 11.0902 6.25878 11.1099 6.23028C11.1296 6.20178 11.1402 6.16794 11.1402 6.13326V5.62115C11.1402 5.59307 11.1333 5.56543 11.12 5.54067C11.1068 5.51591 11.0877 5.49479 11.0643 5.4792L10.1443 4.86737C10.119 4.85074 10.0898 4.84106 10.0596 4.83933C10.0294 4.83759 9.99926 4.84386 9.97225 4.85748L8.71982 5.48369C8.69117 5.49784 8.65911 5.50362 8.62733 5.50036C8.59554 5.4971 8.56532 5.48494 8.54014 5.46528L7.94627 4.99584C7.926 4.97954 7.90973 4.95883 7.89869 4.93528C7.88765 4.91174 7.88214 4.88598 7.88257 4.85998C7.88301 4.83397 7.88937 4.80842 7.90119 4.78525C7.91301 4.76208 7.92996 4.74192 7.95076 4.72631L8.43322 4.37098C8.45506 4.35496 8.47276 4.33395 8.48482 4.3097C8.49689 4.28544 8.50298 4.25866 8.50258 4.23158C8.50218 4.20449 8.49531 4.1779 8.48255 4.15401C8.46978 4.13012 8.45148 4.10963 8.42918 4.09426L7.67764 3.57002C7.65162 3.5517 7.62098 3.54107 7.58921 3.53932C7.55744 3.53757 7.52582 3.54479 7.49795 3.56014C7.22617 3.70883 6.42881 4.14906 6.1458 4.34717C4.83637 5.26543 3.78258 6.50228 3.08393 7.94092C3.00217 8.10983 2.90109 8.28188 2.89121 8.4674C2.88133 8.65293 2.73578 9.06711 2.67514 9.23467C2.66696 9.25732 2.66369 9.28145 2.66555 9.30546C2.6674 9.32947 2.67435 9.35281 2.68592 9.37393L4.28918 12.3199C4.30361 12.3467 4.32503 12.369 4.35117 12.3846L6.03799 13.3971C6.05987 13.4102 6.07854 13.428 6.09262 13.4492C6.10669 13.4704 6.11581 13.4945 6.1193 13.5198L6.45711 15.9698C6.46041 15.9933 6.46854 16.0158 6.48099 16.036C6.49344 16.0562 6.50993 16.0736 6.52943 16.0871L7.84564 16.9918C7.88377 17.018 7.91032 17.0579 7.91977 17.1032L8.61785 20.4184C8.62176 20.4379 8.62922 20.4565 8.63986 20.4732C8.70545 20.5792 8.96689 20.9674 9.28225 21.0249C9.25305 21.033 9.22699 21.0514 9.19779 21.0599C9.27354 21.0732 9.34852 21.0906 9.4224 21.112C9.51225 21.1363 9.60209 21.1569 9.69193 21.1763C9.83254 21.2041 9.84646 21.2257 9.91385 21.1008C10.0037 20.9337 10.1066 20.8762 10.1834 20.8555C10.2151 20.8482 10.2441 20.8321 10.267 20.8091C10.29 20.786 10.306 20.757 10.3132 20.7252L10.7656 18.6283C10.7751 18.5843 10.8007 18.5455 10.8374 18.5196L12.8589 17.0866C12.8824 17.0699 12.9016 17.0479 12.9148 17.0224C12.928 16.9968 12.9349 16.9684 12.9348 16.9397V14.2462C12.9351 14.2184 12.929 14.1911 12.9169 14.1661C12.9048 14.1412 12.8871 14.1194 12.8652 14.1024Z"
                    fill="white"
                  />
                  <path
                    d="M11.5 3.73438C13.4123 3.73422 15.2655 4.39713 16.7438 5.61017C18.2222 6.8232 19.2341 8.5113 19.6074 10.3868C19.9806 12.2624 19.6919 14.2093 18.7906 15.8958C17.8893 17.5824 16.431 18.9043 14.6643 19.6362C12.8977 20.3681 10.9318 20.4649 9.10184 19.9099C7.27184 19.3549 5.69089 18.1825 4.62837 16.5926C3.56585 15.0026 3.08749 13.0934 3.27481 11.1903C3.46213 9.28723 4.30354 7.50795 5.65566 6.15566C6.4213 5.38565 7.33208 4.77516 8.33527 4.35955C9.33846 3.94393 10.4141 3.73144 11.5 3.73438ZM11.5 1.9375C5.94316 1.9375 1.4375 6.44316 1.4375 12C1.4375 17.5568 5.94316 22.0625 11.5 22.0625C17.0568 22.0625 21.5625 17.5568 21.5625 12C21.5625 6.44316 17.0568 1.9375 11.5 1.9375Z"
                    fill="white"
                  />
                </svg>
                {t("headerLanguage")}
              </LanguageWrapper>
            </NavLink>
          </li>
        </NavList>
        {showLanguages && (
          <LanguagesThumb className="language-animationDesc">
            <LanguageText
              className={i18n.language === "uk" && "underlined"}
              onClick={() => {
                changeLanguage("uk");
                setShowLanguages(false);
              }}
            >
              Українська
            </LanguageText>
            <LanguageText
              className={i18n.language === "en" && "underlined"}
              onClick={() => {
                changeLanguage("en");
                setShowLanguages(false);
              }}
            >
              English
            </LanguageText>
            <LanguageText
              className={i18n.language === "pl" && "underlined"}
              onClick={() => {
                changeLanguage("pl");
                setShowLanguages(false);
              }}
            >
              Polski
            </LanguageText>
            {/* <LanguageText
              className={i18n.language === "dk" && "underlined"}
              onClick={() => {
                changeLanguage("dk");
                setShowLanguages(false);
              }}
            >
              Dansk
            </LanguageText>
            <LanguageText
              className={i18n.language === "nl" && "underlined"}
              onClick={() => {
                changeLanguage("nl");
                setShowLanguages(false);
              }}
            >
              Nederlands
            </LanguageText> */}
          </LanguagesThumb>
        )}
      </Nav>
      {showMobileLanguages && (
        <BurgerMenuWrapper className={!isOpen ? "visible" : "header-animation"}>
          <MobileLanguagesWrapper className="language-animation">
            <MobileLanguagesText
              className={i18n.language === "uk" && "underlined"}
              onClick={() => {
                changeLanguage("uk");
                setShowMobileLanguages(false);
              }}
            >
              Українська
            </MobileLanguagesText>
            <MobileLanguagesText
              className={i18n.language === "en" && "underlined"}
              onClick={() => {
                changeLanguage("en");
                setShowMobileLanguages(false);
              }}
            >
              English
            </MobileLanguagesText>
            <MobileLanguagesText
              className={i18n.language === "pl" && "underlined"}
              onClick={() => {
                changeLanguage("pl");
                setShowMobileLanguages(false);
              }}
            >
              Polski
            </MobileLanguagesText>
            {/* <MobileLanguagesText
              className={i18n.language === "dk" && "underlined"}
              onClick={() => {
                changeLanguage("dk");
                setShowMobileLanguages(false);
              }}
            >
              Dansk
            </MobileLanguagesText>
            <MobileLanguagesText
              className={i18n.language === "nl" && "underlined"}
              onClick={() => {
                changeLanguage("nl");
                setShowMobileLanguages(false);
              }}
            >
              Nederlands
            </MobileLanguagesText> */}
          </MobileLanguagesWrapper>
        </BurgerMenuWrapper>
      )}
    </>
  );
};
