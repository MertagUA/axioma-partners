import {
  Accent,
  AnimatedIconsWrapper,
  Description,
  Icon1,
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
          <svg width={162} height={28}>
            <use href={sprite + "#icon-slotoking"}></use>
          </svg>
          <svg width={152.6} height={45.8}>
            <use href={sprite + "#icon-cosmolot"}></use>
          </svg>
        </IconsWrapper>
        <IconsWrapper>
          <svg width={154} height={43.1}>
            <use href={sprite + "#icon-slotscity"}></use>
          </svg>
          <svg width={170} height={30}>
            <use href={sprite + "#icon-favbet"}></use>
          </svg>
        </IconsWrapper>
        <IconsWrapper>
          <svg width={152.6} height={45.8}>
            <use href={sprite + "#icon-cosmolot"}></use>
          </svg>
          <svg width={158} height={61.3}>
            <use href={sprite + "#icon-supergra"}></use>
          </svg>
        </IconsWrapper>
        <IconsWrapper>
          <svg width={170} height={30}>
            <use href={sprite + "#icon-favbet"}></use>
          </svg>
          <svg width={162} height={28}>
            <use href={sprite + "#icon-slotoking"}></use>
          </svg>
        </IconsWrapper>
        <IconsWrapper>
          <svg width={158} height={61.3}>
            <use href={sprite + "#icon-supergra"}></use>
          </svg>
          <svg width={154} height={43.1}>
            <use href={sprite + "#icon-slotscity"}></use>
          </svg>
        </IconsWrapper>
      </AnimatedIconsWrapper>
    </Section>
  );
};
