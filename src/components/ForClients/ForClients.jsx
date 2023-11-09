import {
  Description,
  Icon,
  Item,
  ItemDescription,
  ItemTitle,
  ItemWrapper,
  Section,
  TextWrapper,
  Title,
} from "./ForClients.styled";
import sprite from "../../assets/images/sprite.svg";

export const ForClients = () => {
  return (
    <Section name="for-clients">
      <TextWrapper>
        <Description>
          Ми прагнемо надавати нашим кл
          <span className="ukrainianWordRegular">іє</span>нтам найкращ
          <span className="ukrainianWordRegular">і</span> умови сп
          <span className="ukrainianWordRegular">і</span>впрац
          <span className="ukrainianWordRegular">і</span>, а наща п
          <span className="ukrainianWordRegular">і</span>дтримка завжди готова
          надати необх<span className="ukrainianWordRegular">і</span>дну
          допомогу
        </Description>
        <Title>
          ДЛЯ НАШИХ КЛI<span className="ukrainianWordBold">Є</span>НТ
          <span className="ukrainianWordBold">І</span>В
        </Title>
      </TextWrapper>
      <ItemWrapper>
        <Item>
          <Icon>
            <use href={sprite + "#icon-coin"}></use>
          </Icon>
          <ItemTitle>
            Орган<span className="ukrainianWordBold">і</span>зац
            <span className="ukrainianWordBold">і</span>я виплат
          </ItemTitle>
          <ItemDescription>
            Ми гаранту<span className="ukrainianWordRegular">є</span>мо
            ефективну орган<span className="ukrainianWordRegular">і</span>зац
            <span className="ukrainianWordRegular">і</span>ю виплат та забезпечу
            <span className="ukrainianWordRegular">є</span>м швидкий та над
            <span className="ukrainianWordRegular">і</span>йний доступ до свого
            прибутку
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-clientStar"}></use>
          </Icon>
          <ItemTitle>Кращий CPA rate</ItemTitle>
          <ItemDescription>
            Наш<span className="ukrainianWordRegular">і</span> CPA ставки одн
            <span className="ukrainianWordRegular">і</span> з найвищих на ринку,
            що дозволя<span className="ukrainianWordRegular">є</span> нашим
            партнерам максим<span className="ukrainianWordRegular">і</span>
            зувати св<span className="ukrainianWordRegular">і</span>й дох
            <span className="ukrainianWordRegular">і</span>д
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-emodji"}></use>
          </Icon>
          <ItemTitle>
            Індив<span className="ukrainianWordBold">і</span>дуальн
            <span className="ukrainianWordBold">і</span> умови
          </ItemTitle>
          <ItemDescription>
            Ми пропону<span className="ukrainianWordRegular">є</span>мо
            <span className="ukrainianWordRegular"> і</span>ндив
            <span className="ukrainianWordRegular">і</span>дуальн
            <span className="ukrainianWordRegular">і</span> умови сп
            <span className="ukrainianWordRegular">і</span>впрац
            <span className="ukrainianWordRegular">і</span> для кожного кл
            <span className="ukrainianWordRegular">іє</span>нта, враховуючи{" "}
            <span className="ukrainianWordRegular">ї</span>хн
            <span className="ukrainianWordRegular">і</span> ун
            <span className="ukrainianWordRegular">і</span>кальн
            <span className="ukrainianWordRegular">і</span> потреби та ц
            <span className="ukrainianWordRegular">і</span>л
            <span className="ukrainianWordRegular">і</span>
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-support"}></use>
          </Icon>
          <ItemTitle>
            П<span className="ukrainianWordBold">і</span>дтримка 24 на 7
          </ItemTitle>
          <ItemDescription>
            Наша команда готова надати 24/7 п
            <span className="ukrainianWordRegular">і</span>дтримку, гарантуючи,
            що ус<span className="ukrainianWordRegular">і</span> ваш
            <span className="ukrainianWordRegular">і</span> запити та питання
            обслуговуються вчасно та профес
            <span className="ukrainianWordRegular">і</span>йно
          </ItemDescription>
        </Item>
      </ItemWrapper>
    </Section>
  );
};
