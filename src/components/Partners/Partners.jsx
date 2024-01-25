import {
  Accent,
  AnimatedIconsWrapper,
  Description,
  Icon1,
  Icon10,
  Icon1Img,
  Icon2,
  Icon2Img,
  Icon3,
  Icon3Img,
  Icon4,
  Icon4Img,
  Icon5,
  Icon5Img,
  Icon6,
  Icon6Img,
  Icon7,
  Icon7Img,
  Icon8,
  Icon8Img,
  Icon9,
  IconsWrapper,
  IconsWrapperLast,
  Section,
  Title,
} from "./Partners.styled";
import sprite from "../../assets/images/sprite.svg";
import red from "../../assets/images/red.png";
import mrbet from "../../assets/images/mrbet.png";
import vulcan from "../../assets/images/vulcan.png";
import verde from "../../assets/images/verde.png";
import ice from "../../assets/images/ice.png";
import { useTranslation } from "react-i18next";

export const Partners = () => {
  const { t, i18n } = useTranslation();
  return (
    <Section name="partners">
      <Title className="wow animate__animated animate__fadeInRight">
        {t("partnersTitleOne")}
        <Accent>{t("partnersTitleTwo")}</Accent>
      </Title>
      <Description className="wow animate__animated animate__fadeInLeft">
        {t("partnersDescriptionOne")}
        <br />
        {t("partnersDescriptionTwo")}
      </Description>
      <AnimatedIconsWrapper>
        <IconsWrapper>
          {i18n.language === "pl" && (
            <>
              <Icon1Img src={ice} alt="partner icecasino" />
              <Icon2Img src={vulcan} alt="partner vulcan casino" />
            </>
          )}
          {i18n.language !== "pl" && (
            <>
              <Icon1>
                <use href={sprite + "#icon-slotoking"}></use>
              </Icon1>
              <Icon2>
                <use href={sprite + "#icon-cosmolot"}></use>
              </Icon2>
            </>
          )}
        </IconsWrapper>
        <IconsWrapper>
          {i18n.language === "pl" && (
            <>
              <Icon3Img src={red} alt="partner red bet" />
              <Icon4Img src={verde} alt="partner verde casino" />
            </>
          )}
          {i18n.language !== "pl" && (
            <>
              <Icon3>
                <use href={sprite + "#icon-slotscity"}></use>
              </Icon3>
              <Icon4>
                <use href={sprite + "#icon-favbet"}></use>
              </Icon4>
            </>
          )}
        </IconsWrapper>
        <IconsWrapper>
          {i18n.language === "pl" && (
            <>
              <Icon5Img src={vulcan} alt="partner vulcan casino" />
              <Icon6Img src={mrbet} alt="partner mrbet" />
            </>
          )}
          {i18n.language !== "pl" && (
            <>
              <Icon5>
                <use href={sprite + "#icon-cosmolot"}></use>
              </Icon5>
              <Icon6>
                <use href={sprite + "#icon-supergra"}></use>
              </Icon6>
            </>
          )}
        </IconsWrapper>
        <IconsWrapper>
          {i18n.language === "pl" && (
            <>
              <Icon7Img src={verde} alt="partner verde casino" />
              <Icon8Img src={ice} alt="partner ice casino" />
            </>
          )}
          {i18n.language !== "pl" && (
            <>
              <Icon7>
                <use href={sprite + "#icon-favbet"}></use>
              </Icon7>
              <Icon8>
                <use href={sprite + "#icon-slotoking"}></use>
              </Icon8>
            </>
          )}
        </IconsWrapper>
        <IconsWrapperLast>
          {i18n.language === "pl" && (
            <>
              <Icon7Img src={mrbet} alt="partner mrbet" />
              <Icon8Img src={red} alt="partner redbet" />
            </>
          )}
          {i18n.language !== "pl" && (
            <>
              <Icon9>
                <use href={sprite + "#icon-supergra"}></use>
              </Icon9>
              <Icon10>
                <use href={sprite + "#icon-slotscity"}></use>
              </Icon10>
            </>
          )}
        </IconsWrapperLast>
      </AnimatedIconsWrapper>
    </Section>
  );
};
