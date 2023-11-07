import {
  Accent,
  AnimatedIconsWrapper,
  Description,
  Icon1,
  Icon10,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  IconsWrapper,
  Section,
  Title,
} from "./Partners.styled";
import sprite from "../../assets/images/sprite.svg";

export const Partners = () => {
  return (
    <Section name="partners">
      <Title>
        СПIВПРАЦЯ
        <Accent> З БРЕНДАМИ</Accent>
      </Title>
      <Description>
        Наша партнерський екосистема включає кращі ліцензованi казино.
        <br />
        Разом ми ведемо гравців до найзахопливішого ігрового досвіду, без
        ризиків потрапити в неприємності
      </Description>
      <AnimatedIconsWrapper>
        <IconsWrapper>
          <Icon1 width={190} height={117}>
            <use href={sprite + "#icon-slotoking"}></use>
          </Icon1>
          <Icon2 width={190} height={117}>
            <use href={sprite + "#icon-cosmolot"}></use>
          </Icon2>
        </IconsWrapper>
        <IconsWrapper>
          <Icon3 width={190} height={117}>
            <use href={sprite + "#icon-slotscity"}></use>
          </Icon3>
          <Icon4 width={190} height={117}>
            <use href={sprite + "#icon-favbet"}></use>
          </Icon4>
        </IconsWrapper>
        <IconsWrapper>
          <Icon5 width={190} height={117}>
            <use href={sprite + "#icon-cosmolot"}></use>
          </Icon5>
          <Icon6 width={190} height={117}>
            <use href={sprite + "#icon-supergra"}></use>
          </Icon6>
        </IconsWrapper>
        <IconsWrapper>
          <Icon7 width={190} height={117}>
            <use href={sprite + "#icon-favbet"}></use>
          </Icon7>
          <Icon8 width={190} height={117}>
            <use href={sprite + "#icon-slotoking"}></use>
          </Icon8>
        </IconsWrapper>
        <IconsWrapper>
          <Icon9 width={190} height={117}>
            <use href={sprite + "#icon-supergra"}></use>
          </Icon9>
          <Icon10 width={190} height={117}>
            <use href={sprite + "#icon-slotscity"}></use>
          </Icon10>
        </IconsWrapper>
      </AnimatedIconsWrapper>
    </Section>
  );
};
