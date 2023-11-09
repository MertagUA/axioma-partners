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
      <Title>
        МИ ПРАЦЮ<span className="ukrainianWordBold">Є</span>МО
        <Accent> З КРАЩИМИ</Accent>
      </Title>
      <Description>
        Наша компан<span className="ukrainianWordRegular">і</span>я успішно сп
        <span className="ukrainianWordRegular">і</span>впрацю
        <span className="ukrainianWordRegular">є</span> з р
        <span className="ukrainianWordRegular">і</span>зними сегментами
        <span className="ukrainianWordRegular"> і</span>ндустр
        <span className="ukrainianWordRegular">ії</span> азартних{" "}
        <span className="ukrainianWordRegular">і</span>гор, включаючи{" "}
        <DescriptionAccent>
          канали, блогер<span className="ukrainianWordBold">і</span>в
        </DescriptionAccent>{" "}
        та{" "}
        <DescriptionAccent>
          адм<span className="ukrainianWordBold">і</span>н
          <span className="ukrainianWordBold">і</span>стратор
          <span className="ukrainianWordBold">і</span>в
        </DescriptionAccent>
        , надаючи <span className="ukrainianWordRegular">ї</span>м ефективн
        <span className="ukrainianWordRegular">і</span>
        <span className="ukrainianWordRegular"> і</span>нструменти для р
        <span className="ukrainianWordRegular">і</span>шення тих чи{" "}
        <span className="ukrainianWordRegular">і</span>нших задач
      </Description>
      <DescriptionMobile>
        Наша компан<span className="ukrainianWordRegular">і</span>я усп
        <span className="ukrainianWordRegular">і</span>шно сп
        <span className="ukrainianWordRegular">і</span>впрацю
        <span className="ukrainianWordRegular">є</span> з р
        <span className="ukrainianWordRegular">і</span>зними сегментами
        <span className="ukrainianWordRegular">і</span>ндустр
        <span className="ukrainianWordRegular">ії</span> азартних{" "}
        <span className="ukrainianWordRegular">і</span>гор, надаючи{" "}
        <span className="ukrainianWordRegular">ї</span>м ефективн
        <span className="ukrainianWordRegular">і</span>{" "}
        <span className="ukrainianWordRegular">і</span>нструменти для вир
        <span className="ukrainianWordRegular">і</span>шення задач
      </DescriptionMobile>
      <ItemsWrapper>
        <Item>
          <IconFirst>
            <use href={sprite + "#icon-sun"}></use>
          </IconFirst>
          <ItemTitle>Каналами</ItemTitle>
          <ItemDescription>
            Ми розробля<span className="ukrainianWordRegular">є</span>мо
            <span className="ukrainianWordRegular"> і</span>ндив
            <span className="ukrainianWordRegular">і</span>дуальн
            <span className="ukrainianWordRegular">і</span> рекламн
            <span className="ukrainianWordRegular">і</span> кампан
            <span className="ukrainianWordRegular">ії</span>, щоб знаходити св
            <span className="ukrainianWordRegular">і</span>й шлях до ц
            <span className="ukrainianWordRegular">і</span>льово
            <span className="ukrainianWordRegular">ї</span> аудитор
            <span className="ukrainianWordRegular">ії</span>
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-box"}></use>
          </Icon>
          <ItemTitle>Блогерами</ItemTitle>
          <ItemDescription>
            Наша команда працю<span className="ukrainianWordRegular">є</span> з
            блогерами, допомагаючи{" "}
            <span className="ukrainianWordRegular">ї</span>м створювати контент,
            що призводить до вза<span className="ukrainianWordRegular">є</span>
            мних виг<span className="ukrainianWordRegular">і</span>дних
            результат<span className="ukrainianWordRegular">і</span>в.
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-blueStar"}></use>
          </Icon>
          <ItemTitle>
            Адм<span className="ukrainianWordBold">і</span>нами
          </ItemTitle>
          <ItemDescription>
            Ми сп<span className="ukrainianWordRegular">і</span>впрацю
            <span className="ukrainianWordRegular">є</span>мо з адм
            <span className="ukrainianWordRegular">і</span>н
            <span className="ukrainianWordRegular">і</span>страторами груп та
            канал<span className="ukrainianWordRegular">і</span>в, надаючи
            <span className="ukrainianWordRegular"> і</span>нструменти та
            знання, необх<span className="ukrainianWordRegular">і</span>дн
            <span className="ukrainianWordRegular">і</span> для зб
            <span className="ukrainianWordRegular">і</span>льшення конверс
            <span className="ukrainianWordRegular">і</span>й
          </ItemDescription>
          <Comma src={comma} alt="comma" />
        </Item>
        <LastItem>
          <LastIcon>
            <use href={sprite + "#icon-questionMark"}></use>
          </LastIcon>
          <ItemTitle>
            Ц<span className="ukrainianWordBold">і</span>каво
          </ItemTitle>
          <LastItemDescription>
            Ма<span className="ukrainianWordRegular">є</span>мо ще трохи ц
            <span className="ukrainianWordRegular">і</span>каво
            <span className="ukrainianWordRegular">ї</span>{" "}
            <span className="ukrainianWordRegular">і</span>нформац
            <span className="ukrainianWordRegular">ії</span> для тебе, гортай
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
