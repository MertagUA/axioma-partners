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
  IconsWrapperLast,
  Section,
  Title,
} from "./Partners.styled";
import sprite from "../../assets/images/sprite.svg";

export const Partners = () => {
  return (
    <Section name="partners">
      <Title>
        СП<span className="ukrainianWordBold">і</span>ВПРАЦЯ
        <Accent> З БРЕНДАМИ</Accent>
      </Title>
      <Description>
        Наша партнерський екосистема включа
        <span className="ukrainianWordMedium">є</span> кращ
        <span className="ukrainianWordMedium">і</span> л
        <span className="ukrainianWordMedium">і</span>цензован
        <span className="ukrainianWordMedium">і</span> казино.
        <br />
        Разом ми ведемо гравц<span className="ukrainianWordMedium">і</span>в до
        найзахоплив<span className="ukrainianWordMedium">і</span>шого{" "}
        <span className="ukrainianWordMedium">і</span>грового досв
        <span className="ukrainianWordMedium">і</span>ду, без ризик
        <span className="ukrainianWordMedium">і</span>в потрапити в непри
        <span className="ukrainianWordMedium">є</span>мност
        <span className="ukrainianWordMedium">і</span>
      </Description>
      <AnimatedIconsWrapper>
        <IconsWrapper>
          <Icon1>
            <use href={sprite + "#icon-slotoking"}></use>
          </Icon1>
          <Icon2>
            <use href={sprite + "#icon-cosmolot"}></use>
          </Icon2>
        </IconsWrapper>
        <IconsWrapper>
          <Icon3>
            <use href={sprite + "#icon-slotscity"}></use>
          </Icon3>
          <Icon4>
            <use href={sprite + "#icon-favbet"}></use>
          </Icon4>
        </IconsWrapper>
        <IconsWrapper>
          <Icon5>
            <use href={sprite + "#icon-cosmolot"}></use>
          </Icon5>
          <Icon6>
            <use href={sprite + "#icon-supergra"}></use>
          </Icon6>
        </IconsWrapper>
        <IconsWrapper>
          <Icon7>
            <use href={sprite + "#icon-favbet"}></use>
          </Icon7>
          <Icon8>
            <use href={sprite + "#icon-slotoking"}></use>
          </Icon8>
        </IconsWrapper>
        <IconsWrapperLast>
          <Icon9>
            <use href={sprite + "#icon-supergra"}></use>
          </Icon9>
          <Icon10>
            <use href={sprite + "#icon-slotscity"}></use>
          </Icon10>
        </IconsWrapperLast>
      </AnimatedIconsWrapper>
    </Section>
  );
};
