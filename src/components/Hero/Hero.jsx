import {
  Button,
  Description,
  Lines,
  TextWrapper,
  Title,
  TitleBottom,
  Section,
  TopText,
  TitleSpan,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <TopText
        className="wow animate__animated animate__fadeInDown"
        data-wow-delay="0.3s"
      >
        кращий
      </TopText>
      <Title className="wow animate__animated animate__fadeInUp">
        ЛЕНДIНГ <TitleSpan>ДЛЯ РОБОТИ</TitleSpan>
      </Title>
      <TextWrapper>
        <Description
          className="wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.6s"
        >
          “підвищуйте св<span className="ukrainianWordMedium">і</span>й прибуток
          разом з нами - вашим над
          <span className="ukrainianWordMedium">і</span>йним партнером у реклам
          <span className="ukrainianWordMedium">і</span>, телеграм каналах та
          блогах!“
        </Description>
        <TitleBottom className="wow animate__animated animate__fadeInUp">
          З БЛОГЕРАМИ
        </TitleBottom>
      </TextWrapper>
      <Lines>
        <Button
          type="button"
          className="wow animate__animated animate__fadeInRightBig"
          data-wow-delay="0.9s"
        >
          Написати нам
        </Button>
      </Lines>
    </Section>
  );
};
