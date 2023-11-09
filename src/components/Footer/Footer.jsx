import {
  Bottom,
  Button,
  FooterStyled,
  GreyText,
  IconTextWrapper,
  Image,
  ImageMobile,
  LeftText,
  LeftWrapper,
  Mail,
  RightText,
  RightWrapper,
  Wrapper,
} from "./Footer.styled";
import logo from "../../assets/images/logo.webp";
import logoMobile from "../../assets/images/logoFooter.png";
import sprite from "../../assets/images/sprite.svg";

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <LeftWrapper>
          <Image
            src={logo}
            alt="logotype axioma partners"
            width={"147px"}
            height={"64.3px"}
            loading="lazy"
          />
          <ImageMobile
            src={logoMobile}
            alt="logotype axioma partners"
            width={"147px"}
            height={"64.3px"}
            loading="lazy"
          />
          <LeftText>
            Ваш усп<span className="ukrainianWordRegular">і</span>х - наша мета,
            <span className="ukrainianWordRegular"> і</span> ми завжди готов
            <span className="ukrainianWordRegular">і </span>
            допомогти вам досягти його
          </LeftText>
        </LeftWrapper>
        <RightWrapper>
          <Button type="button">Написати нам</Button>
          <Mail href="mailto:axiomateam@gmail.com">axiomateam@gmail.com</Mail>
          <a
            href="https://www.instagram.com/axioma.team/"
            rel="noreferrer"
            target="_blank"
          >
            <IconTextWrapper>
              <RightText>axioma.team</RightText>
              <svg width={"32px"} height={"32px"}>
                <use href={sprite + "#icon-instagramFooter"}></use>
              </svg>
            </IconTextWrapper>
          </a>
        </RightWrapper>
      </Wrapper>
      <Bottom>
        <GreyText>© 2023 Axioma Partners</GreyText>
        <GreyText>All rights reserved!</GreyText>
      </Bottom>
    </FooterStyled>
  );
};
