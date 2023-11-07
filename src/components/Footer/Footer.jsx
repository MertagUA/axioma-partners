import {
  Button,
  FooterStyled,
  IconTextWrapper,
  LeftText,
  LeftWrapper,
  Mail,
  RightText,
  RightWrapper,
  Wrapper,
} from "./Footer.styled";
import logo from "../../assets/images/logo.webp";
import sprite from "../../assets/images/sprite.svg";

export const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <LeftWrapper>
          <img
            src={logo}
            alt="logotype axioma partners"
            width={"147px"}
            height={"64.3px"}
          />
          <LeftText>
            Ваш успіх - наша мета, і ми завжди готові допомогти вам досягти його
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
    </FooterStyled>
  );
};
