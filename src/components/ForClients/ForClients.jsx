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
          <span className="ukrainianWordMedium">іє</span>нтам найкращ
          <span className="ukrainianWordMedium">і</span> умови сп
          <span className="ukrainianWordMedium">і</span>впрац
          <span className="ukrainianWordMedium">і</span>, а наща п
          <span className="ukrainianWordMedium">і</span>дтримка завжди готова
          надати необх<span className="ukrainianWordMedium">і</span>дну допомогу
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
            Ми гаранту<span className="ukrainianWordMedium">є</span>мо ефективну
            орган<span className="ukrainianWordMedium">і</span>зац
            <span className="ukrainianWordMedium">і</span>ю виплат та забезпечу
            <span className="ukrainianWordMedium">є</span>м швидкий та над
            <span className="ukrainianWordMedium">і</span>йний доступ до свого
            прибутку
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-clientStar"}></use>
          </Icon>
          <ItemTitle>Кращий CPA rate</ItemTitle>
          <ItemDescription>
            Наш<span className="ukrainianWordMedium">і</span> CPA ставки одн
            <span className="ukrainianWordMedium">і</span> з найвищих на ринку,
            що дозволя<span className="ukrainianWordMedium">є</span> нашим
            партнерам максим<span className="ukrainianWordMedium">і</span>
            зувати св<span className="ukrainianWordMedium">і</span>й дох
            <span className="ukrainianWordMedium">і</span>д
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
            Ми пропону<span className="ukrainianWordMedium">є</span>мо
            <span className="ukrainianWordMedium"> і</span>ндив
            <span className="ukrainianWordMedium">і</span>дуальн
            <span className="ukrainianWordMedium">і</span> умови сп
            <span className="ukrainianWordMedium">і</span>впрац
            <span className="ukrainianWordMedium">і</span> для кожного кл
            <span className="ukrainianWordMedium">іє</span>нта, враховуючи{" "}
            <span className="ukrainianWordMedium">ї</span>хн
            <span className="ukrainianWordMedium">і</span> ун
            <span className="ukrainianWordMedium">і</span>кальн
            <span className="ukrainianWordMedium">і</span> потреби та ц
            <span className="ukrainianWordMedium">і</span>л
            <span className="ukrainianWordMedium">і</span>
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
            <span className="ukrainianWordMedium">і</span>дтримку, гарантуючи,
            що ус<span className="ukrainianWordMedium">і</span> ваш
            <span className="ukrainianWordMedium">і</span> запити та питання
            обслуговуються вчасно та профес
            <span className="ukrainianWordMedium">і</span>йно
          </ItemDescription>
        </Item>
      </ItemWrapper>
    </Section>
  );
};
