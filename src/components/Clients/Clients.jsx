import {
  Accent,
  Button,
  Comma,
  Description,
  DescriptionAccent,
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

export const Clients = () => {
  return (
    <Section name="clients">
      <Title>
        МИ ПРАЦЮЄМО
        <Accent> З КРАЩИМИ</Accent>
      </Title>
      <Description>
        Наша компанія успішно співпрацює з різними сегментами індустрії азартних
        ігор, включаючи <DescriptionAccent>канали, блогерів</DescriptionAccent>{" "}
        та <DescriptionAccent>адміністраторів</DescriptionAccent>, надаючи їм
        ефективні інструменти для рішення тих чи інших задач
      </Description>
      <ItemsWrapper>
        <Item>
          <IconFirst>
            <use href={sprite + "#icon-sun"}></use>
          </IconFirst>
          <ItemTitle>Каналами</ItemTitle>
          <ItemDescription>
            Ми розробляємо індивідуальні рекламні кампанії, щоб знаходити свій
            шлях до цільової аудиторії
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-box"}></use>
          </Icon>
          <ItemTitle>Блогерами</ItemTitle>
          <ItemDescription>
            Наша команда працює з блогерами, допомагаючи їм створювати контент,
            що призводить до взаємних вигідних результатів.
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-blueStar"}></use>
          </Icon>
          <ItemTitle>Адмінами</ItemTitle>
          <ItemDescription>
            Ми співпрацюємо з адміністраторами груп та каналів, надаючи
            інструменти та знання, необхідні для збільшення конверсій
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <LastItem>
          <LastIcon>
            <use href={sprite + "#icon-questionMark"}></use>
          </LastIcon>
          <ItemTitle>Цікаво</ItemTitle>
          <LastItemDescription>
            Маємо ще трохи цікавої інформації для тебе, гортай нижче
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
              <p>Що у нас тут</p>
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
