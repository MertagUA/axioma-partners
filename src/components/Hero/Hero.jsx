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
      <TopText>кращий</TopText>
      <Title>
        ЛЕНДIНГ <TitleSpan>ДЛЯ РОБОТИ</TitleSpan>
      </Title>
      <TextWrapper>
        <Description>
          “підвищуйте св<span className="ukrainianWordMedium">і</span>й прибуток
          разом з нами - вашим над
          <span className="ukrainianWordMedium">і</span>йним партнером у реклам
          <span className="ukrainianWordMedium">і</span>, телеграм каналах та
          блогах!“
        </Description>
        <TitleBottom>З БЛОГЕРАМИ</TitleBottom>
      </TextWrapper>
      <Lines>
        <Button type="button">Написати нам</Button>
      </Lines>
    </Section>
  );
};
