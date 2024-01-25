import {
  Accent,
  ArrowText,
  Button,
  Comma,
  Description,
  DescriptionAccent,
  DescriptionMobile,
  Icon,
  IconFirst,
  Item,
  ItemDescription,
  ItemTitle,
  ItemsWrapper,
  LastIcon,
  LastItem,
  LastItemDescription,
  Section,
  Title,
} from "./Clients.styled";
import sprite from "../../assets/images/sprite.svg";
import comma from "../../assets/images/comma.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export const Clients = () => {
  const { t } = useTranslation();

  return (
    <Section name="clients">
      <Title className="wow animate__animated animate__fadeInUp">
        {t("clientsTitleOne")}
        <Accent>{t("clientsTitleTwo")}</Accent>
      </Title>
      <Description className="wow animate__animated animate__fadeInRight">
        {t("clientsDescriptionOne")}
        <DescriptionAccent>{t("clientsDescriptionTwo")}</DescriptionAccent>
        {t("clientsDescriptionThree")}
        <DescriptionAccent>{t("clientsDescriptionFour")}</DescriptionAccent>
        {t("clientsDescriptionFive")}
      </Description>
      <DescriptionMobile className="wow animate__animated animate__fadeInRight">
        {t("clientsDescriptionMobile")}
      </DescriptionMobile>
      <ItemsWrapper>
        <Item className="wow animate__animated animate__fadeInLeft">
          <IconFirst>
            <use href={sprite + "#icon-sun"}></use>
          </IconFirst>
          <ItemTitle>{t("clientsChannels")}</ItemTitle>
          <ItemDescription>{t("clientsChannelsText")}</ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item className="wow animate__animated animate__fadeInLeft">
          <Icon>
            <use href={sprite + "#icon-box"}></use>
          </Icon>
          <ItemTitle>{t("clientsBloggers")}</ItemTitle>
          <ItemDescription>{t("clientsBloggersText")}</ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item className="wow animate__animated animate__fadeInLeft">
          <Icon>
            <use href={sprite + "#icon-blueStar"}></use>
          </Icon>
          <ItemTitle>{t("clientsAdmins")}</ItemTitle>
          <ItemDescription>{t("clientsAdminsText")}</ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <LastItem className="wow animate__animated animate__fadeInLeft">
          <LastIcon>
            <use href={sprite + "#icon-questionMark"}></use>
          </LastIcon>
          <ItemTitle>{t("clientsInteresting")}</ItemTitle>
          <LastItemDescription>
            {t("clientsInterestingText")}
          </LastItemDescription>
          <Button type="button">
            <Link
              to="partners"
              spy={true}
              smooth={true}
              duration={350}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <ArrowText>{t("clientsWhatWeHaveHere")}</ArrowText>
              <svg width={16} height={19}>
                <use href={sprite + "#icon-questionDownMark"}></use>
              </svg>
            </Link>
          </Button>
        </LastItem>
      </ItemsWrapper>
    </Section>
  );
};
