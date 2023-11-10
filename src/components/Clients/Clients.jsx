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

export const Clients = () => {
  return (
    <Section name="clients">
      <Title className="wow animate__animated animate__fadeInUp">
        МИ ПРАЦЮ<span className="ukrainianWordBold">Є</span>МО
        <Accent> З КРАЩИМИ</Accent>
      </Title>
      <Description className="wow animate__animated animate__fadeInRight">
        Наша компан<span className="ukrainianWordMedium">і</span>я успішно сп
        <span className="ukrainianWordMedium">і</span>впрацю
        <span className="ukrainianWordMedium">є</span> з р
        <span className="ukrainianWordMedium">і</span>зними сегментами
        <span className="ukrainianWordMedium"> і</span>ндустр
        <span className="ukrainianWordMedium">ії</span> азартних{" "}
        <span className="ukrainianWordMedium">і</span>гор, включаючи{" "}
        <DescriptionAccent>
          канали, блогер<span className="ukrainianWordBold">і</span>в
        </DescriptionAccent>{" "}
        та{" "}
        <DescriptionAccent>
          адм<span className="ukrainianWordBold">і</span>н
          <span className="ukrainianWordBold">і</span>стратор
          <span className="ukrainianWordBold">і</span>в
        </DescriptionAccent>
        , надаючи <span className="ukrainianWordMedium">ї</span>м ефективн
        <span className="ukrainianWordMedium">і</span>
        <span className="ukrainianWordMedium"> і</span>нструменти для р
        <span className="ukrainianWordMedium">і</span>шення тих чи{" "}
        <span className="ukrainianWordMedium">і</span>нших задач
      </Description>
      <DescriptionMobile className="wow animate__animated animate__fadeInRight">
        Наша компан<span className="ukrainianWordMedium">і</span>я усп
        <span className="ukrainianWordMedium">і</span>шно сп
        <span className="ukrainianWordMedium">і</span>впрацю
        <span className="ukrainianWordMedium">є</span> з р
        <span className="ukrainianWordMedium">і</span>зними сегментами
        <span className="ukrainianWordMedium">і</span>ндустр
        <span className="ukrainianWordMedium">ії</span> азартних{" "}
        <span className="ukrainianWordMedium">і</span>гор, надаючи{" "}
        <span className="ukrainianWordMedium">ї</span>м ефективн
        <span className="ukrainianWordMedium">і</span>{" "}
        <span className="ukrainianWordMedium">і</span>нструменти для вир
        <span className="ukrainianWordMedium">і</span>шення задач
      </DescriptionMobile>
      <ItemsWrapper>
        <Item className="wow animate__animated animate__fadeInLeft">
          <IconFirst>
            <use href={sprite + "#icon-sun"}></use>
          </IconFirst>
          <ItemTitle>Каналами</ItemTitle>
          <ItemDescription>
            Ми розробля<span className="ukrainianWordMedium">є</span>мо
            <span className="ukrainianWordMedium"> і</span>ндив
            <span className="ukrainianWordMedium">і</span>дуальн
            <span className="ukrainianWordMedium">і</span> рекламн
            <span className="ukrainianWordMedium">і</span> кампан
            <span className="ukrainianWordMedium">ії</span>, щоб знаходити св
            <span className="ukrainianWordMedium">і</span>й шлях до ц
            <span className="ukrainianWordMedium">і</span>льово
            <span className="ukrainianWordMedium">ї</span> аудитор
            <span className="ukrainianWordMedium">ії</span>
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item className="wow animate__animated animate__fadeInLeft">
          <Icon>
            <use href={sprite + "#icon-box"}></use>
          </Icon>
          <ItemTitle>Блогерами</ItemTitle>
          <ItemDescription>
            Наша команда працю<span className="ukrainianWordMedium">є</span> з
            блогерами, допомагаючи{" "}
            <span className="ukrainianWordMedium">ї</span>м створювати контент,
            що призводить до вза<span className="ukrainianWordMedium">є</span>
            мних виг<span className="ukrainianWordMedium">і</span>дних результат
            <span className="ukrainianWordMedium">і</span>в.
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item className="wow animate__animated animate__fadeInLeft">
          <Icon>
            <use href={sprite + "#icon-blueStar"}></use>
          </Icon>
          <ItemTitle>
            Адм<span className="ukrainianWordBold">і</span>нами
          </ItemTitle>
          <ItemDescription>
            Ми сп<span className="ukrainianWordMedium">і</span>впрацю
            <span className="ukrainianWordMedium">є</span>мо з адм
            <span className="ukrainianWordMedium">і</span>н
            <span className="ukrainianWordMedium">і</span>страторами груп та
            канал<span className="ukrainianWordMedium">і</span>в, надаючи
            <span className="ukrainianWordMedium"> і</span>нструменти та знання,
            необх<span className="ukrainianWordMedium">і</span>дн
            <span className="ukrainianWordMedium">і</span> для зб
            <span className="ukrainianWordMedium">і</span>льшення конверс
            <span className="ukrainianWordMedium">і</span>й
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <LastItem className="wow animate__animated animate__fadeInLeft">
          <LastIcon>
            <use href={sprite + "#icon-questionMark"}></use>
          </LastIcon>
          <ItemTitle>
            Ц<span className="ukrainianWordBold">і</span>каво
          </ItemTitle>
          <LastItemDescription>
            Ма<span className="ukrainianWordMedium">є</span>мо ще трохи ц
            <span className="ukrainianWordMedium">і</span>каво
            <span className="ukrainianWordMedium">ї</span>{" "}
            <span className="ukrainianWordMedium">і</span>нформац
            <span className="ukrainianWordMedium">ії</span> для тебе, гортай
            нижче
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
              <ArrowText>Що у нас тут</ArrowText>
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
