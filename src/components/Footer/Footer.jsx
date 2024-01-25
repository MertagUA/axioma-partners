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
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

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
          <LeftText>{t("footerText")}</LeftText>
        </LeftWrapper>
        <RightWrapper>
          <Button href={t("writeUs")} target="_blank" rel="noopener">
            {t("footerButton")}
          </Button>
          <Mail href="mailto:support@axioma.partners">
            support@axioma.partners
          </Mail>
          <a href={t("footerLinkToInstagram")} rel="noreferrer" target="_blank">
            <IconTextWrapper>
              <RightText>{t("footerInstagram")}</RightText>
              <svg width={"32px"} height={"32px"}>
                <use href={sprite + "#icon-instagramFooter"}></use>
              </svg>
            </IconTextWrapper>
          </a>
        </RightWrapper>
      </Wrapper>
      <Bottom>
        <GreyText>© 2024 Axioma Partners</GreyText>
        <GreyText>All rights reserved!</GreyText>
      </Bottom>
    </FooterStyled>
  );
};
