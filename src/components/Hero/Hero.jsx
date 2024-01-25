import { useTranslation } from "react-i18next";
import {
  Button,
  Description,
  Lines,
  TextWrapper,
  Title,
  TitleBottom,
  Section,
  // TopText,
} from "./Hero.styled";

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section>
      {/* <TopText
        className="wow animate__animated animate__fadeInDown"
        data-wow-delay="0.3s"
      >
        {t("heroBest")}
      </TopText> */}
      <Title
        className="wow animate__animated animate__fadeInUp"
        language={i18n.language}
      >
        {t("heroTitleOne")}
      </Title>
      <TextWrapper>
        <Description
          className="wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.6s"
        >
          {t("heroDescription")}
        </Description>
        <TitleBottom
          className="wow animate__animated animate__fadeInUp"
          language={i18n.language}
        >
          {t("heroTitleTwo")}
        </TitleBottom>
      </TextWrapper>
      <Lines>
        <Button
          className="wow animate__animated animate__fadeInRightBig"
          data-wow-delay="0.9s"
          href={t("writeUs")}
          target="_blank"
          rel="noopener"
        >
          {t("heroButton")}
        </Button>
      </Lines>
    </Section>
  );
};
