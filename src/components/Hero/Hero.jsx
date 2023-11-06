import {
  Button,
  Description,
  Lines,
  TextWrapper,
  Title,
  TitleBottom,
  Section,
  TopText,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <TopText>кращий</TopText>
      <Title>ЛЕНДIНГ ДЛЯ РОБОТИ</Title>
      <TextWrapper>
        <Description>
          “підвищуйте свій прибуток разом з нами - вашим надійним партнером у
          рекламі, телеграм каналах та блогах!“
        </Description>
        <TitleBottom>З БЛОГЕРАМИ</TitleBottom>
      </TextWrapper>
      <Lines>
        <Button type="button">Написати нам</Button>
      </Lines>
    </Section>
  );
};
