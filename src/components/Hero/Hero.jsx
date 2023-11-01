import {
  HeroButton,
  HeroDescription,
  HeroLines,
  HeroTextWrapper,
  HeroTitle,
  HeroTitleBottom,
  Section,
  TopText,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <TopText>кращий</TopText>
      <HeroTitle>ЛЕНДIНГ ДЛЯ РОБОТИ</HeroTitle>
      <HeroTextWrapper>
        <HeroDescription>
          “підвищуйте свій прибуток разом з нами - вашим надійним партнером у
          рекламі, телеграм каналах та блогах!“
        </HeroDescription>
        <HeroTitleBottom>З БЛОГЕРАМИ</HeroTitleBottom>
      </HeroTextWrapper>
      <HeroLines>
        <HeroButton type="button">Написати нам</HeroButton>
      </HeroLines>
    </Section>
  );
};
