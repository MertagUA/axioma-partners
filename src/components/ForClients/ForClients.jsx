import {
  Description,
  Icon,
  Item,
  ItemDescription,
  ItemTitle,
  ItemWrapper,
  Section,
  TextWrapper,
  Title,
} from "./ForClients.styled";
import sprite from "../../assets/images/sprite.svg";
import { useTranslation } from "react-i18next";

export const ForClients = () => {
  const { t } = useTranslation();

  return (
    <Section name="for-clients">
      <TextWrapper>
        <Description className="wow animate__animated animate__fadeInLeft">
          {t("forClientsDescription")}
        </Description>
        <Title className="wow animate__animated animate__fadeInRight">
          {t("forClientsTitle")}
        </Title>
      </TextWrapper>
      <ItemWrapper>
        <Item className="wow animate__animated animate__fadeInUp">
          <Icon>
            <use href={sprite + "#icon-coin"}></use>
          </Icon>
          <ItemTitle>{t("forClientsItemOneTitle")}</ItemTitle>
          <ItemDescription>{t("forClientsItemOneText")}</ItemDescription>
        </Item>
        <Item className="wow animate__animated animate__fadeInUp">
          <Icon>
            <use href={sprite + "#icon-clientStar"}></use>
          </Icon>
          <ItemTitle>{t("forClientsItemTwoTitle")}</ItemTitle>
          <ItemDescription>{t("forClientsItemTwoText")}</ItemDescription>
        </Item>
        <Item className="wow animate__animated animate__fadeInUp">
          <Icon>
            <use href={sprite + "#icon-emodji"}></use>
          </Icon>
          <ItemTitle>{t("forClientsItemThreeTitle")}</ItemTitle>
          <ItemDescription>{t("forClientsItemThreeText")}</ItemDescription>
        </Item>
        <Item className="wow animate__animated animate__fadeInUp">
          <Icon>
            <use href={sprite + "#icon-support"}></use>
          </Icon>
          <ItemTitle>{t("forClientsItemFourTitle")}</ItemTitle>
          <ItemDescription>{t("forClientsItemFourText")}</ItemDescription>
        </Item>
      </ItemWrapper>
    </Section>
  );
};
